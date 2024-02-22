import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 text-sm py-3 rounded-md flex items-center justify-center gap-2",
        {
          "bg-zinc-800 text-white hover:bg-zinc-900": variant === "default",
          "ring-1 ring-zinc-200 rounded-md hover:bg-zinc-100":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
