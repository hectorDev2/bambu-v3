import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'
import RoomPage from 'src/components/RoomPage'
import {
  getAllRoomSlugs,
  getRoomAndMoreStories,
  getSettings,
} from 'src/lib/sanity.client'
import { Room, Settings } from 'src/lib/sanity.queries'

const PreviewRoomPage = lazy(
  () => import('../../src/components/PreviewRoomPage')
)

interface PageProps {
  room: Room
  settings?: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { settings, room, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={<RoomPage loading preview room={room} settings={settings} />}
      >
        <PreviewRoomPage token={token} room={room} settings={settings} />
      </PreviewSuspense>
    )
  }

  return <RoomPage room={room} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = true, previewData = {}, params = {} } = ctx
  const [settings, { room }] = await Promise.all([
    getSettings(),
    getRoomAndMoreStories(params.slug),
  ])

  if (!room) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      room,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllRoomSlugs()
  return {
    paths: slugs?.map(({ slug }) => `/rooms/${slug}`) || [],
    fallback: 'blocking',
  }
}
