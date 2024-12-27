// pages/posts/[id].js
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  // すべての記事のIDを取得（ダミーデータ）
  const posts = [{ id: 1 }, { id: 2 }]

  // IDに基づくパスを生成
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postId = params.id
  const post = {
    id: postId,
    title: `ブログ記事 ${postId}`,
    content: `これは記事 ${postId} の内容です。`,
  }

  return {
    props: {
      post,
    },
  }
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
