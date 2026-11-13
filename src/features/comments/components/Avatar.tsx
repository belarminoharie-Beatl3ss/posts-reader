import type { ReactNode } from "react";

type AvatarProps = {
  children: ReactNode;
};

export default function Avatar({ children }: AvatarProps) {
  return (
    <div
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium uppercase text-muted-foreground"
    >
      {children}
    </div>
  );
}
