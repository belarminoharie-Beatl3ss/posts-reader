import { usePosts } from "../posts.hooks";
import PostRow, { PostRowSkeleton } from "./Post";
import { Button } from "@/components/ui/button";

export default function PostList() {
  const { data, error, isPending, isError, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="space-y-3">
        <p role="status" className="sr-only">
          Loading posts
        </p>
        <div aria-hidden="true" className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <PostRowSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">The posts didn't load</h2>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <p>Nothing published yet.</p>;
  }

  return (
    <div className="space-y-3">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
}
