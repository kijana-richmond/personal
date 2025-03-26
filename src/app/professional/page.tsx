import React from "react";
import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="py-20">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
          Hi, I&apos;m KJ
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          A software engineer passionate about building exceptional digital experiences
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <div className="prose prose-gray dark:prose-invert">
          <p>
            [Your compelling introduction and background here]
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="space-y-8">
          {/* Add your experience items here */}
          <div className="rounded-lg border p-6">
            <h3 className="mb-2 text-xl font-semibold">Senior Software Engineer</h3>
            <p className="mb-4 text-sm text-muted-foreground">Company Name • 2020 - Present</p>
            <ul className="list-disc space-y-2 pl-4">
              <li>Key achievement or responsibility</li>
              <li>Another significant contribution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16">
        <h2 className="mb-8 text-3xl font-bold">Resume</h2>
        <div className="flex justify-center">
          <a
            href="/path-to-your-resume.pdf"
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
} 