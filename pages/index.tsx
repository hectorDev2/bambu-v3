import { PreviewSuspense } from '@sanity/preview-kit'
import IndexPage from 'src/components/IndexPage'
import { getAllPosts, getSettings } from 'src/lib/sanity.client'
import { Post, Settings } from 'src/lib/sanity.queries'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewIndexPage = lazy(() => import('src/components/PreviewIndexPage'))

interface PageProps {
  rooms: any[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { rooms, settings, preview, token } = props

  if (preview) {
    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview rooms={rooms} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage rooms={rooms} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, rooms = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])
  console.log(rooms[0]?.images[0], 'rooms')

  return {
    props: {
      rooms,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
