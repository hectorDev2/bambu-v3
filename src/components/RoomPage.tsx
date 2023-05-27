import { Container } from '@mui/material'
import { notFound } from 'next/navigation'
import * as demo from 'src/lib/demo.data'
import type { Room, Settings } from 'src/lib/sanity.queries'

import Layout from './Layout'
import { RoomDetails } from './RoomDetails'

export interface RoomProps {
  preview?: boolean
  loading?: boolean
  room: Room
  settings: Settings
}

const NO_ROOMS: Room[] = []

export default function RoomPage(props: RoomProps) {
  const { preview, loading, room, settings } = props
  const { title = demo.title } = settings || {}
  console.log(room, 'room')

  const slug = room?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          {preview && !room ? <p>Loading…</p> : <RoomDetails room={room} />}
        </Container>
      </Layout>
    </>
  )
}
