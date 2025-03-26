"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tight hover:opacity-80"
        >
          KJ
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/professional"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname.startsWith("/professional")
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            Professional
          </Link>
          <Link
            href="/personal"
            className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
              pathname.startsWith("/personal")
                ? "text-foreground"
                : "text-foreground/60"
            }`}
          >
            Personal
          </Link>
          <div className="pl-4 border-l">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 