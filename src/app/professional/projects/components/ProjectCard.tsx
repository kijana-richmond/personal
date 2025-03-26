import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  technologies: string[];
}

export function ProjectCard({ title, description, slug, technologies }: ProjectCardProps) {
  return (
    <Link
      href={`/professional/projects/${slug}`}
      className="group relative rounded-lg border p-6 hover:border-foreground"
    >
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 