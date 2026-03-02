# Elite Solution USA LLC — Portfolio Showcase

A professional portfolio website showcasing all projects built by **Elite Solution USA LLC**.  
Live at: **[https://portfolio-showcase-orpin-two.vercel.app](https://portfolio-showcase-orpin-two.vercel.app)**

---

## 🗂 Project Structure

```
elite-solution-portfolio/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (NavBar, fonts, global styles)
│   ├── page.tsx                # Homepage — project grid + search + filters
│   ├── globals.css             # Global Tailwind CSS
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Dynamic project detail page (all 17 projects)
│
├── components/                 # Reusable UI components
│   ├── NavBar.tsx              # Top navigation with projects dropdown
│   ├── ProjectCard.tsx         # Card shown on the homepage grid
│   ├── ProjectDetailLayout.tsx # Full project detail page layout
│   ├── DemoSimulators.tsx      # Interactive demo widgets per project
│   └── WorkflowViewer.tsx      # n8n workflow viewer component
│
├── data/                       # Static data layer
│   ├── projects.ts             # All 17 project entries (name, KPIs, features, etc.)
│   └── workflows.ts            # n8n workflow data
│
├── public/                     # Static assets (images, icons)
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

---

## 📁 Adding a New Project

1. Open `data/projects.ts`
2. Add a new entry to the `projects` array following the existing structure
3. The project automatically appears on the homepage and gets a detail page at `/projects/your-slug`

No new page files needed — the dynamic route handles everything.

---

## 🌐 Deployment

Deployed automatically via **Vercel** on every push to the `main` branch.  
GitHub repo: [https://github.com/fadiwagfy511/portfolio-showcase](https://github.com/fadiwagfy511/portfolio-showcase)

---

## 🏢 Company

Built and maintained by **Elite Solution USA LLC**  
Custom software, automation, and digital solutions for businesses across industries.
