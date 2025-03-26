import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="container px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              KJ&apos;s Space
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Welcome to my digital garden—a space where professional expertise meets creative expression.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <Link
                href="/professional"
                className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Professional
              </Link>
              <Link
                href="/personal"
                className="rounded-lg border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                Personal
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-8">
        <div className="container flex justify-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-sm text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-sm text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
} 