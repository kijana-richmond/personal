import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="container max-w-4xl">
        <h1 className="mb-8 text-center text-4xl font-bold sm:text-6xl">
          Welcome to KJ&apos;s World
        </h1>
        
        <div className="grid gap-8 sm:grid-cols-2">
          <Link
            href="/professional"
            className="group relative overflow-hidden rounded-lg bg-primary p-6 text-primary-foreground transition-all hover:shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-semibold">Professional</h2>
            <p className="text-primary-foreground/80">
              Explore my professional work, projects, and experience
            </p>
          </Link>

          <Link
            href="/personal"
            className="group relative overflow-hidden rounded-lg bg-secondary p-6 text-secondary-foreground transition-all hover:shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-semibold">Personal</h2>
            <p className="text-secondary-foreground/80">
              Discover my creative writing, blog posts, and screenplays
            </p>
          </Link>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:your.email@example.com"
              className="hover:text-foreground"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
} 