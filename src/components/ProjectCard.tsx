import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  href: string;
  description: string;
  // React.ComponentType is a type that represents a React component.
  // Here we are using it to define the type of the icon prop.
  icon: React.ComponentType<{ className: string }>;
}

export function ProjectCard({
  name,
  description,
  icon: Icon,
  href,
}: ProjectCardProps) {
  return (
    <div>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white 
      shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
      >
        <Icon className="h-8 w-8" />
      </div>

      <div className="mt-2 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-zinc-900">{name}</h2>
        <p className="text-zinc-500 font-light">{description}</p>

        <Link
          target="_blank"
          href={href}
          className="flex text-zinc-600 items-center gap-1 hover:underline"
        >
          Learn more
          <IconArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
