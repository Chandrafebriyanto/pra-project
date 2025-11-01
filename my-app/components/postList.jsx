import Link from "next/link";

function postList(props) {
    const posts = props.posts;
  return (
    <div className="post-list">
        {posts.map((post) => (
          <div className="post-item" key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
  )
}

export default postList
