import { getAllPost } from "@/lib/api";
import PostList from "@/components/postList";

export default async function Page() {
  const posts = await getAllPost();
//   const getPost = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h1>Daftar Tulisan</h1>
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
