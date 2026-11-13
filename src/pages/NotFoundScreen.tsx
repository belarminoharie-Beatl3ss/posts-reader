import { Link, useLocation } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { gutter } from "@/lib/layout";

export default function NotFoundScreen() {
  const { pathname } = useLocation();

  return (
    <div className={`${gutter} sm:ml-20`}>
      <div />
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold">
          This page doesn't exist
        </h1>
        <p className="text-muted-foreground">
          Nothing is routed at {pathname}.
        </p>
        <Link to="/" className={buttonVariants({ variant: "outline" })}>
          Browse all posts
        </Link>
      </div>
    </div>
  );
}
