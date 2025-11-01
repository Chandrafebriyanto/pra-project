import { getLastPost } from "@/lib/api";
import PostList from "@/components/postList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
        <p className="subtittle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse
          a non? Rerum accusantium culpa laborum quos corrupti. Error facilis
          magni soluta? Cum quae labore error quasi voluptatibus reprehenderit
          ipsum?
        </p>
      </div>
      <PostList posts = {posts}/>
    </>
  );
}
