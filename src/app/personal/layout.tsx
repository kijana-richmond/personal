import React from "react";
import Link from "next/link";

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">KJ</span>
          </Link>
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link href="/personal/blog" className="hover:text-foreground/80">
              Blog
            </Link>
            <Link href="/personal/screenplays" className="hover:text-foreground/80">
              Screenplays
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
} 