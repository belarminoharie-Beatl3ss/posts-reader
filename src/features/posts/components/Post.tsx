import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "../posts.types";

type PostRowProps = {
  post: Post;
};

export default function PostRow({ post }: PostRowProps) {
  return (
    <Card size="sm" className="relative">
      <CardHeader>
        <h2 className="font-semibold">
          <Link
            to={`/posts/${post.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {post.title}
          </Link>
        </h2>
        <CardAction>#{post.id}</CardAction>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-muted-foreground">{post.body}</p>
      </CardContent>
    </Card>
  );
}

export function PostRowSkeleton() {
  return (
    <Card size="sm">
      <CardHeader>
        <Skeleton className="h-5 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-4/5" />
      </CardContent>
    </Card>
  );
}
