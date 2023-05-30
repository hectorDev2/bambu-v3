import IndexPage from 'src/components/IndexPage'
import { usePreview } from 'src/lib/sanity.preview'
import {
  indexQuery,
  type Room,
  type Settings,
  settingsQuery,
} from 'src/lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const rooms: Room[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview rooms={rooms} settings={settings} />
}
