import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      href={projectUrl}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
    >
      {imageUrl && (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
} 