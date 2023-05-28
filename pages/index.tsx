import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import IndexPage from 'src/components/IndexPage'
import { getAllRooms, getSettings } from 'src/lib/sanity.client'
import { Settings } from 'src/lib/sanity.queries'
import { initializeData } from './rooms/RoomSlice'
import * as demo from 'src/lib/demo.data'

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
  const dispatch = useDispatch()

  const payload: any = rooms

  useEffect(() => {
    dispatch(initializeData(payload))
  }, [dispatch, payload])

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
    getAllRooms(),
  ])

  return {
    props: {
      rooms,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
