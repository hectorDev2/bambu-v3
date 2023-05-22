import IndexPage from 'src/components/IndexPage'
import { usePreview } from 'src/lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'src/lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview rooms={posts} settings={settings} />
}
