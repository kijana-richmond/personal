import React from "react";
import { ProjectCard } from "@/components/ui/project-card";

// This would typically come from a CMS or database
const projects = [
  {
    title: "Example Project 1",
    description: "A brief description of the project and its impact.",
    slug: "example-1",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
          />
        ))}
      </div>
    </div>
  );
} 