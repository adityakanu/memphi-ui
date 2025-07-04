
# Memphi UI Design System

**Memphi UI** is a playful, retro‑meets‑neo‑brutalist React component library built on top of [shadcn/ui](https://github.com/shadcn/ui), Radix primitives, and Tailwind v4’s CSS‑first theming. Drop it into any Next.js or React project via the shadcn CLI, and you’re live in seconds.

---

## 🚀 Features

- **Memphis‑inspired** blobs, doodles & bright OKLCH colors  
- **Neo‑brutalist** shadows & bold borders  
- **Tailwind v4 CSS‑first** theming—no JS config merges required  
- **shadcn CLI support** (`npx shadcn add @memphi/ui`)  
- **TypeScript‑typed**, accessible, headless primitives under the hood  
- **One‑click “Open in v0.dev”** links in docs  

---

## 📁 Repository Structure

```

memphi-ui/
├── app/
│   └── globals.css       # Tailwind CSS-first theming
├── components/
│   └── memphi/       # Core Memphi UI package (exports components)
├── scripts/
│   └── build-registry.js  # (optional) JSON registry generator
├── README.md
├── components.json   # shadcn CLI config
├── next.config.js    # Next.js config
├── package.json      # Turbo monorepo + scripts
└── turbo.json        # Turborepo pipeline config

```

---

## 🛠️ Prerequisites

- **Node.js** ≥ 18  
- **npm** (or **pnpm** / **Yarn** with workspaces)  
- **shadcn CLI** installed globally or via npx:  
  ```bash
  npm install -g @shadcn/cli
  # or
  npx shadcn@latest --help
```

---

## ⚡ Quickstart

**Add Memphi UI to your project**

In your Next.js or React app:

   ```bash
   npx shadcn add https://ui.memphi.dev/r/memphi-button.json
   ```



**Use a component**

   ```tsx
   import { Button } from "components/memphi/button";

   export default function Page() {
     return <Button shape="rectangle" variant="destructive">Destructive</Button>;
   }
   ```



## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feat/YourComponent`
3. Add your component under `components/memphi`
4. (Optional) Update registry script or JSON in `public/r/`
5. Send a PR!

We welcome bug fixes, new components, variant improvements, and docs enhancements.

---

## 📜 License

Released under the **MIT License**.
See [LICENSE](LICENSE) for details.

---

Made with 🎉 in India by Aditya — bring your UIs to life with a playful retro‑neo‑brutalist twist!
