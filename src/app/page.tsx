import Image from "next/image";
import avatarImage from "@/images/avatar.jpg";
import heroImage from "@/images/hero-image.jpg";
import { Button } from "@/components/Button";
import { IconDownload } from "@tabler/icons-react";
import { projects } from "@/misc/data";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <>
      {/*  Hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div>
          {/*  We use the Image component to load the avatar image */}
          <Image
            src={avatarImage}
            alt="John Doe's avatar"
            // We also give it a rounded border and a background color
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

          <div className="mt-6">
            {/*  We use the Link component to create a link to the resume */}
            {/*  The resume is a PDF file, so we use the href attribute to point to the file */}
            <Link href="/resume.pdf">
              <Button>
                Download CV
                <IconDownload className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm lg:max-w-none m-auto">
          <Image
            className="rounded-lg"
            src={heroImage}
            alt="Hero image"
            priority
          />
        </div>
      </section>

      {/*  About section */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold text-zinc-800">My Projects</h2>

        <p className="text-base text-zinc-600 font-light">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>

        {/*  Project cards , we only want to show 2 projects here */}
        {/*  We use the splice method to get the first 2 projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-7">
          {/*  Since the array is a reference type, we need to create a new array to avoid mutating the original array */}
          {/*  by using the spread operator, we create a new array with the same elements */}
          {[...projects].splice(0, 4).map((project, projectIndex) => (
            <ProjectCard
              key={projectIndex}
              href={project.href}
              name={project.name}
              description={project.description}
              icon={project.icon}
            />
          ))}
        </div>

        <div className="mt-7">
          <Link href="/projects">
            <Button>View All Projects</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
