// pages/posts/[id].js
import { useState, useEffect } from 'react'

export default function Post({ post }) {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  // コメントの取得
  useEffect(() => {
    fetch('/api/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
  }, [])

  // コメントの送信
  const submitComment = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: commentText }),
    })

    setCommentText('') // 入力フィールドをクリア
    // コメントを再取得
    fetch('/api/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
  }

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.content}</p> */}

      <h2>コメント一覧</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
      </ul>

      <div>
        <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
        <button onClick={submitComment}>コメントを追加</button>
      </div>
    </div>
  )
}
