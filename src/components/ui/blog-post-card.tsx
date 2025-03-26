import React from "react";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  slug,
  tags = [],
}: BlogPostCardProps) {
  return (
    <Link
      href={`/personal/blog/${slug}`}
      className="block rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
    >
      <article>
        <div className="flex items-center justify-between">
          <time className="text-sm text-muted-foreground">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {tags.length > 0 && (
            <div className="flex gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{excerpt}</p>
      </article>
    </Link>
  );
} 