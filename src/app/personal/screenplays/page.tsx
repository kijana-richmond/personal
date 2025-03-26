import React from "react";
import Link from "next/link";

// This would typically come from a CMS or database
const screenplays = [
  {
    title: "Example Screenplay",
    genre: "Drama",
    logline: "A brief description of the screenplay's plot...",
    pdfUrl: "/screenplays/example.pdf",
  },
  // Add more screenplays as needed
];

export default function ScreenplaysPage() {
  return (
    <div className="container py-8">
      <h1 className="mb-8 text-4xl font-bold">Screenplays</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {screenplays.map((screenplay) => (
          <div
            key={screenplay.title}
            className="rounded-lg border bg-card p-6"
          >
            <h2 className="mb-2 text-xl font-semibold">{screenplay.title}</h2>
            <p className="mb-2 text-sm text-muted-foreground">
              Genre: {screenplay.genre}
            </p>
            <p className="mb-4 text-muted-foreground">{screenplay.logline}</p>
            <Link
              href={screenplay.pdfUrl}
              className="inline-block rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Screenplay
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 