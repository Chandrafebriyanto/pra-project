import React from "react";
import Link from "next/link";
import {Post} from "@/type/post";

interface postListProps {
  posts: Post[];
}

function postList({ posts }: postListProps): React.ReactElement {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h2>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default postList;
