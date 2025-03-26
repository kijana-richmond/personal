import React from "react";
import { BlogPostCard } from "@/components/ui/blog-post-card";

// This would typically come from a CMS or MDX files
const posts = [
  {
    title: "Example Blog Post",
    excerpt: "A brief preview of the blog post content...",
    date: "2024-03-26",
    slug: "example-post",
    tags: ["Technology", "Creativity"],
  },
  // Add more posts as needed
];

export default function BlogPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
} 