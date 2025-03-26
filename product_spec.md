# 📄 Product Spec – KJ’s Professional + Personal Website

## ✨ Overview

A personal website that showcases both professional work (resume, projects, portfolio) and personal interests (blogs, screenplays). The homepage leads to either a professional or personal experience.

-   The **professional side** is a **single scrollable page** with sections for About, Experience, Projects, and Resume—similar to [Brittany Chiang’s site](https://brittanychiang.com/).
-   The **personal side** introduces KJ’s creative work, including blog posts and screenplays. This content is nested under the `/personal` route.

---

## 🎯 Goals

-   Communicate KJ’s professional strengths in a quick and elegant format.
-   Showcase KJ’s personality and creative interests through personal writing and screenplays.
-   Maintain a consistent and responsive design across devices.
-   Prioritize performance, clarity, and accessibility.

---

## 🧱 Pages & Routes

### `/` – **Homepage**

-   **Header with site navigation and lightmode/darkmode toggle**
-   Clean landing with two entry points: `Professional` and `Personal`
-   Optional featured content or short bio
-   **Footer with contact info** (email, GitHub, LinkedIn)

---

### `/professional` – **Single Page Portfolio**

A one-page scroll-based layout with anchors for each section:

-   **Hero** (Name, title, short intro, call-to-action)
-   **About**
-   **Experience**
-   **Projects** (grid or cards with animation – each links to detail page)
-   **Resume** (downloadable PDF)
-   **Footer**: Social/contact links

Each project links to:

### `/projects/[slug]` – **Project Detail Page**

-   Detailed write-up: problem, role, tools, screenshots, links

---

### `/personal` – **Personal Home**

-   Introduction to KJ’s creative side: writing, blogging, screenplays
-   Two buttons/sections:
    -   `Read the Blog` → `/personal/blog`
    -   `Explore Screenplays` → `/personal/screenplays`

---

### `/personal/blog`

-   Blog post list (title, date, excerpt)
-   Filterable by tag
-   Uses MDX or Contentlayer for post content

### `/personal/blog/[slug]`

-   Individual blog post
-   Title, date, body content, optional tag list

---

### `/personal/screenplays`

-   Grid or list view of screenplays
-   Info: title, genre, short description/logline
-   Optional PDF preview/download

---

## 🧑‍💻 Tech Stack

-   **Frontend:** Next.js (App Router) + TypeScript
-   **Styling:** Tailwind CSS
-   **Markdown Content:** MDX or Contentlayer
-   **Animations:** Framer Motion
-   **Hosting:** Vercel
-   **Icons:** Lucide or FontAwesome

---

## 🎨 Design Notes

-   **Visual Split:**

    -   Professional side: modern, clean, neutral colors
    -   Personal side: expressive, warm, with more creative design elements

-   **Typography:**

    -   Professional: sans-serif for clarity
    -   Personal: serif or artistic fonts for creativity

-   **Navigation:**
    -   Global nav with links: `Home`, `Professional`, `Personal`
    -   Footer across all pages with contact links

---

## ✅ MVP Checklist

-   [ ] Landing page with nav options to `Professional` and `Personal`
-   [ ] `/professional` one-page layout
-   [ ] `/projects/[slug]` project detail pages
-   [ ] `/personal` landing page
-   [ ] `/personal/blog` blog list + `/personal/blog/[slug]`
-   [ ] `/personal/screenplays` screenplays list
-   [ ] Footer with contact info
-   [ ] Fully responsive layout
-   [ ] Dark/light mode toggle

---

## 🛠️ Future Features

-   Page transition animations
-   CMS integration (e.g., Notion, Sanity, or Contentful)
-   Analytics
-   Tag-based filtering for blog/screenplays
