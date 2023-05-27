import { usePreview } from 'src/lib/sanity.preview'
import { Room, roomAndMoreStoriesQuery } from 'src/lib/sanity.queries'

import PostRoom, { RoomProps } from './RoomPage'

export default function PreviewRoomPage({
  token,
  room,
  settings,
}: {
  token: null | string
} & RoomProps) {
  console.log('heres', room)

  return <PostRoom preview room={room} settings={settings} />
}
