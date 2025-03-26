import React from "react";
import Link from "next/link";

export default function PersonalPage() {
  return (
    <div className="container py-16">
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-6xl">
        Creative Corner
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
        Welcome to my personal space where I share my thoughts, stories, and creative endeavors.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        <Link
          href="/personal/blog"
          className="group relative overflow-hidden rounded-lg bg-card p-6 transition-all hover:shadow-lg"
        >
          <h2 className="mb-2 text-2xl font-semibold">Blog</h2>
          <p className="text-muted-foreground">
            Explore my thoughts on technology, creativity, and life
          </p>
        </Link>

        <Link
          href="/personal/screenplays"
          className="group relative overflow-hidden rounded-lg bg-card p-6 transition-all hover:shadow-lg"
        >
          <h2 className="mb-2 text-2xl font-semibold">Screenplays</h2>
          <p className="text-muted-foreground">
            Read my original screenplays and story ideas
          </p>
        </Link>
      </div>
    </div>
  );
} 