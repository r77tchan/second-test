// pages/index.js
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Post from './Post'

export async function getStaticProps() {
  // ダミーのブログデータを取得（実際にはAPIやデータベースから取得）
  const posts = [
    { id: 1, title: '初めてのブログ記事', description: 'これは最初の投稿です' },
    { id: 2, title: '次のブログ記事', description: 'これは二番目の投稿です' },
  ]

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ブログ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className={styles.link}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Post />
    </div>
  )
}
