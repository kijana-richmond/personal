import React from "react";
import { notFound } from "next/navigation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  content: string;
}

// This would typically come from a CMS or database
const projects: Record<string, Project> = {
  "example-1": {
    title: "Example Project 1",
    description: "A brief description of the project and its impact.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    content: `
      Detailed description of the project would go here.
      Including challenges, solutions, and outcomes.
    `,
  },
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-8">
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <h1>{project.title}</h1>
        <div className="flex flex-wrap gap-2 not-prose">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="lead">{project.description}</p>
        <div className="mt-8">{project.content}</div>
      </article>
    </div>
  );
} 