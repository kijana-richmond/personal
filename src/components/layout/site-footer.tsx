import React from "react";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center gap-4 py-8 md:h-24 md:flex-row md:justify-between md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
        <div className="flex gap-4">
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
      </div>
    </footer>
  );
} 