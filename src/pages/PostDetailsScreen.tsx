import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";

const toParagraphs = (body: string) =>
  body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export default function PostDetailsScreen() {
  const { postId } = useParams();
  const { data, error, isPending, isError, refetch } = usePost(Number(postId));

  const railEdge = "sm:ml-20";

  if (isPending) {
    return (
      <div className={gutter}>
        <div />
        <div className="space-y-5">
          <p role="status" className="sr-only">
            Loading post
          </p>
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-32" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    const isNotFound = isAxiosError(error) && error.response?.status === 404;

    return (
      <div className={`${gutter} ${railEdge}`}>
        <div />
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">404</p>
          <h1 className="text-2xl font-semibold">
            {isNotFound ? "No post at this address" : "The post didn't load"}
          </h1>
          <p className="text-muted-foreground">
            {isNotFound
              ? "This post either never existed or has been deleted."
              : error.message}
          </p>
          {!isNotFound && (
            <Button variant="outline" onClick={() => refetch()}>
              Try again
            </Button>
          )}
          <div>
            <Link to="/" className={buttonVariants({ variant: "outline" })}>
              Browse all posts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={gutter}>
      <div className="text-sm text-muted-foreground">#{data.id}</div>
      <div className="space-y-6">
        <header className="space-y-3">
          <h1 className="font-reading text-3xl font-semibold tracking-tight">
            {data.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Author {data.userId}
          </p>
        </header>

        <div className="space-y-5 leading-7">
          {toParagraphs(data.body).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
