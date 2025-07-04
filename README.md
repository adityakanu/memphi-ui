# Memphi UI

> Where Memphis Doodles meet NeoBrutalism

A playful, bold React component library that brings the vibrant energy of Memphis design to modern web interfaces. Built with TypeScript, Tailwind CSS, and accessibility in mind.

## ✨ Features

- 🎨 **Memphis-inspired Design**: Bold colors, geometric shapes, and playful aesthetics
- 🔧 **Copy & Paste**: No npm package required - just copy the code
- 🎯 **Fully Accessible**: Built with Radix UI primitives
- 🎪 **Highly Customizable**: Variants, sizes, and custom shadow colors
- 📱 **Mobile First**: Responsive design out of the box
- 🔥 **TypeScript**: Full type safety included
- ⚡ **Performance**: Optimized with class-variance-authority

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### 2. Add Utility Function

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 3. Configure Tailwind CSS

Add these colors to your `tailwind.config.js`:

```javascript
@theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --font-sans: var(--font-comic-neue);
    --color-sidebar-ring: var(--sidebar-ring);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar: var(--sidebar);
    --color-chart-5: var(--chart-5);
    --color-chart-4: var(--chart-4);
    --color-chart-3: var(--chart-3);
    --color-chart-2: var(--chart-2);
    --color-chart-1: var(--chart-1);
    --color-ring: var(--ring);
    --color-input: var(--input);
    --color-border: var(--border);
    --color-destructive: var(--destructive);
    --color-accent-foreground: var(--accent-foreground);
    --color-accent: var(--accent);
    --color-muted-foreground: var(--muted-foreground);
    --color-muted: var(--muted);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-secondary: var(--secondary);
    --color-primary-foreground: var(--primary-foreground);
    --color-primary: var(--primary);
    --color-popover-foreground: var(--popover-foreground);
    --color-popover: var(--popover);
    --color-card-foreground: var(--card-foreground);
    --color-card: var(--card);
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
    --color-retro-1:  oklch(91% 0.18  95deg);  /* was #FFC567 */
    --color-retro-2:  oklch(78% 0.23 330deg);  /* was #FB7DA8 */
    --color-retro-3:  oklch(74% 0.25  23deg);  /* was #FD5A46 */
    --color-retro-4:  oklch(33% 0.18 277deg);  /* was #552CB7 */
    --color-retro-5:  oklch(45% 0.18 145deg);  /* was #00995E */
    --color-retro-6:  oklch(57% 0.21 221deg);  /* was #058CD7 */
    --color-retro-7:  oklch(82% 0.24 327deg);  /* was #FE90E8 */
    --color-retro-8:  oklch(95% 0.12 196deg);  /* was #C0F7FE */
    --color-retro-9:  oklch(84% 0.17 135deg);  /* was #99E885 */
    --color-retro-10: oklch(87% 0.18  94deg);  /* was #F7CB46 */
    --color-retro-11: oklch(92% 0.17  82deg);  /* was #FFDC8B */
    --color-retro-12: oklch(0%  0     0deg );  /* was #000000 */
  }
  
  :root {
    --radius: 0.625rem;
    --background: oklch(1    0    0);
    --foreground: oklch(0.145 0    0);
    --card:            oklch(1    0    0);
    --card-foreground: oklch(0.145 0    0);
    --popover:         oklch(1    0    0);
    --popover-foreground: oklch(0.145 0  0);
    --primary:         oklch(0.205 0    0);
    --primary-foreground: oklch(0.985 0  0);
    --secondary:       oklch(0.97  0    0);
    --secondary-foreground: oklch(0.205 0  0);
    --muted:           oklch(0.97  0    0);
    --muted-foreground:oklch(0.556 0    0);
    --accent:          oklch(0.97  0    0);
    --accent-foreground:oklch(0.205 0   0);
    --destructive:     oklch(0.577 0.245 27.325);
    --border:          oklch(0.922 0    0);
    --input:           oklch(0.922 0    0);
    --ring:            oklch(0.708 0    0);
    --chart-1:         oklch(0.646 0.222 41.116);
    --chart-2:         oklch(0.6   0.118 184.704);
    --chart-3:         oklch(0.398 0.07  227.392);
    --chart-4:         oklch(0.828 0.189 84.429);
    --chart-5:         oklch(0.769 0.188 70.08);
    --sidebar:              oklch(0.985 0    0);
    --sidebar-foreground:   oklch(0.145 0    0);
    --sidebar-primary:      oklch(0.205 0    0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent:       oklch(0.97  0    0);
    --sidebar-accent-foreground: oklch(0.205 0  0);
    --sidebar-border:       oklch(0.922 0    0);
    --sidebar-ring:         oklch(0.708 0    0);
  }
  
  .dark {
    --background:       oklch(0.145 0    0);
    --foreground:       oklch(0.985 0    0);
    --card:             oklch(0.205 0    0);
    --card-foreground:  oklch(0.985 0    0);
    --popover:          oklch(0.205 0    0);
    --popover-foreground: oklch(0.985 0  0);
    --primary:         oklch(0.922 0    0);
    --primary-foreground: oklch(0.205 0  0);
    --secondary:       oklch(0.269 0    0);
    --secondary-foreground: oklch(0.985 0  0);
    --muted:           oklch(0.269 0    0);
    --muted-foreground:oklch(0.708 0    0);
    --accent:          oklch(0.269 0    0);
    --accent-foreground:oklch(0.985 0  0);
    --destructive:     oklch(0.704 0.191 22.216);
    --border:          oklch(1    0    0 / 10%);
    --input:           oklch(1    0    0 / 15%);
    --ring:            oklch(0.556 0    0);
    --chart-1:         oklch(0.488 0.243 264.376);
    --chart-2:         oklch(0.696 0.17  162.48);
    --chart-3:         oklch(0.769 0.188 70.08);
    --chart-4:         oklch(0.627 0.265 303.9);
    --chart-5:         oklch(0.645 0.246 16.439);
    --sidebar:         oklch(0.205 0    0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent:  oklch(0.269 0    0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border:  oklch(1    0    0 / 10%);
    --sidebar-ring:    oklch(0.556 0    0);
  }
```

### 4. Copy Components

Visit the [Components page](http://memphi.dev/components) and copy the components you need!

## 🎨 Components

### Button

A versatile button component with Memphis-inspired styling:

```jsx
import { Button } from "@/components/memphi/button"

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button shape="rectangle" shadowColor="oklch(0.6 0.2 240)">
        Custom Shadow
      </Button>
    </div>
  )
}
```

**Props:**
- `variant`: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`
- `shape`: `oval` | `rectangle`
- `size`: `sm` | `default` | `lg` | `xl` | `icon`
- `shadowColor`: Custom shadow color (any CSS color format)
- `asChild`: Render as child component (Radix UI pattern)

## 🏗️ Development

This project is built with:

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible primitives
- **Lucide React** - Icons

### Running the Website

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Building the Registry

The component registry is automatically generated:

```bash
# Generate registry JSON files
npm run registry:build
```

This creates JSON files in `public/r/` that contain:
- Component code
- Props documentation
- Usage examples
- Installation instructions

## 📁 Project Structure

```
memphi-ui/
├── app/                    # Next.js app directory
│   ├── components/         # Components showcase page
│   ├── docs/              # Documentation page
│   ├── examples/          # Examples page
│   └── page.tsx           # Landing page
├── components/
│   ├── memphi/            # Main component library
│   │   └── button.tsx     # Button component
│   └── ui/                # UI utilities
│       └── navigation.tsx # Navigation component
├── registry/              # Component registry
│   ├── ui/                # Registry component files
│   └── schema.ts          # Registry schema
├── public/r/              # Generated registry JSON files
└── scripts/
    └── build-registry.ts  # Registry build script
```

## 🎯 Design Philosophy

Memphi UI is inspired by the Memphis design movement of the 1980s, characterized by:

- **Bold Colors**: Vibrant, contrasting color palettes
- **Geometric Shapes**: Strong geometric forms and patterns
- **Playful Typography**: Fun, expressive typefaces
- **Asymmetry**: Dynamic, off-balance compositions
- **Texture**: Rich visual textures and patterns

Combined with modern NeoBrutalism principles:

- **High Contrast**: Strong visual hierarchy
- **Bold Borders**: Thick, prominent borders
- **Drop Shadows**: Dramatic shadow effects
- **Flat Design**: No gradients or subtle effects
- **Accessibility**: WCAG compliant contrast ratios

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Add New Components**: Create new components following the Memphis aesthetic
2. **Improve Documentation**: Help make the docs clearer and more comprehensive
3. **Fix Bugs**: Report and fix any issues you find
4. **Design Feedback**: Share ideas for improving the design system

### Adding a New Component

1. Create the component in `components/memphi/`
2. Add it to the registry in `registry/ui/`
3. Update `registry/registry-components.ts`
4. Run `npm run registry:build`
5. Add documentation and examples

## 🙏 Acknowledgments

- Memphis design movement pioneers
- The React and TypeScript communities
- Radix UI for accessible primitives
- Tailwind CSS for utility-first styling
- All contributors and users of this library

---

Made with ❤️ for developers who love bold, playful design.

Visit [the website](http://memphi.dev) to see Memphi UI in action!
