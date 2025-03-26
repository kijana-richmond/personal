# KJ's Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring both professional and personal sections.

## Features

-   **Professional Section**

    -   About Me
    -   Work Experience
    -   Projects Portfolio
    -   Downloadable Resume

-   **Personal Section**
    -   Blog Posts
    -   Screenplays
    -   Creative Writing

## Tech Stack

-   Next.js 14 (App Router)
-   TypeScript
-   Tailwind CSS
-   Framer Motion
-   Lucide Icons

## Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (routes)/
│   │   ├── (professional)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── projects/
│   │   └── (personal)/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── blog/
│   │       └── screenplays/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   └── lib/
└── styles/
```

## Development

-   `npm run dev` - Start development server
-   `npm run build` - Build production bundle
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## License

MIT
