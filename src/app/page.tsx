import Image from "next/image";
import avatarImage from "@/images/avatar.jpg";
import heroImage from "@/images/hero-image.jpg";
import { Button } from "@/components/Button";
import {
  IconArrowRight,
  IconBriefcase,
  IconDownload,
} from "@tabler/icons-react";
import { projects, resume } from "@/misc/data";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <IconBriefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">Work & Education</span>
      </h2>
      <ol className="mt-5 space-y-3">
        {resume.map((role, roleIndex) => (
          <li className="flex gap-4 text-sm" key={roleIndex}>
            <div className="flex-1">
              <div className="text-zinc-800 font-semibold">{role.company}</div>
              <div className="text-zinc-600">{role.title}</div>
            </div>

            <div className="text-zinc-600">
              {role.start} - {role.end}
            </div>
          </li>
        ))}
      </ol>

      <Link href="/resume.pdf">
        <Button className="mt-6 w-full">
          Download CV
          <IconDownload className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/*  Hero section */}
      <section className="grid grid-cols-12 gap-9">
        <div className="lg:col-span-6 col-span-12">
          <Image
            src={avatarImage}
            alt="John Doe's avatar"
            className="h-16 w-16 mt-6 rounded-full bg-zinc-100 object-cover"
            priority
          />

          <h1 className="text-4xl mt-6 font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Full-stack developer, tech enthusiast, and AI hobbyist.
          </h1>

          <p className="mt-6 text-base text-zinc-600 font-light">
            I’m John Doe, a full-stack developer and tech enthusiast based in
            Hong Kong. I’m the lead developer at TechNova, where we create
            innovative solutions that leverage AI and machine learning to solve
            real-world problems.
          </p>

          <div className="flex gap-x-2 mt-6">
            <Button>View LinkedIn</Button>
            <Button variant="outline">View GitHub </Button>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 max-w-sm lg:max-w-none m-auto">
          <Image
            className="rounded-lg"
            src={heroImage}
            alt="Hero image"
            priority
          />
        </div>
      </section>

      {/*  About section */}
      <section className="grid grid-cols-12 mt-24 gap-9">
        <div className="lg:col-span-8 col-span-12 space-y-4">
          <h2 className="text-2xl font-bold text-zinc-800">My Projects</h2>

          <p className="text-base text-zinc-600 font-light">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>

          {/*  Project cards , we only want to show 2 projects here */}
          {/*  We use the splice method to get the first 2 projects */}
          <div className="grid grid-cols-12 mt-12 gap-8">
            {projects.splice(0, 2).map((project, projectIndex) => (
              <ProjectCard
                className="lg:col-span-6 col-span-12"
                key={projectIndex}
                href={project.href}
                name={project.name}
                description={project.description}
                icon={project.icon}
              />
            ))}
          </div>

          <Link href="/projects" className="mt-10">
            <Button>View All Projects</Button>
          </Link>
        </div>

        <div className="lg:col-span-4 col-span-12">
          <Resume />
        </div>
      </section>
    </>
  );
}
