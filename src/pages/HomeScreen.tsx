import PostList from "@/features/posts/components/PostList";

export default function HomeScreen() {
  return (
    <>
      <h1 className="sr-only">Posts</h1>
      <PostList />
    </>
  );
}
