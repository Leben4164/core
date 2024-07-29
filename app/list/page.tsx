
import Link from 'next/link';
 
// get data
async function getPosts() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/information/records',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}
const PostsPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>지원 학생 목록</h1>
      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />
      })}
    </div>
  )
}
 
const PostItem = ({ post }: any) => {
  const { id, numberAndName } = post || {};
  return (
    <Link href={`/list/${id}`}>
      <h2>{numberAndName}</h2>
    </Link>
  );
};
 

export default PostsPage;