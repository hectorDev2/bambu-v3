import { Container } from '@mui/material'
import * as demo from 'src/lib/demo.data'
import type { Post, Settings } from 'src/lib/sanity.queries'
import { notFound } from 'next/navigation'
import Layout from './Layout'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          {preview && !post ? <p>Loading…</p> : <>hi bambu {slug}</>}
        </Container>
      </Layout>
    </>
  )
}
