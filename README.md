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
module.exports = {
  theme: {
    extend: {
      colors: {
        'retro-1': 'oklch(91% 0.18 95deg)',   // Warm Yellow
        'retro-2': 'oklch(78% 0.23 330deg)',  // Hot Pink
        'retro-3': 'oklch(74% 0.25 23deg)',   // Coral Red
        'retro-4': 'oklch(33% 0.18 277deg)',  // Deep Purple
        'retro-5': 'oklch(45% 0.18 145deg)',  // Forest Green
        'retro-6': 'oklch(57% 0.21 221deg)',  // Ocean Blue
        'retro-7': 'oklch(82% 0.24 327deg)',  // Magenta
        'retro-8': 'oklch(95% 0.12 196deg)',  // Light Cyan
        'retro-9': 'oklch(84% 0.17 135deg)',  // Lime Green
        'retro-10': 'oklch(87% 0.18 94deg)',  // Golden Yellow
        'retro-11': 'oklch(92% 0.17 82deg)',  // Cream
        'retro-12': 'oklch(0% 0 0deg)',       // Black
      }
    }
  }
}
```

### 4. Copy Components

Visit the [Components page](http://localhost:3000/components) and copy the components you need!

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

## 📄 License

MIT License - feel free to use this in your projects!

## 🙏 Acknowledgments

- Memphis design movement pioneers
- The React and TypeScript communities
- Radix UI for accessible primitives
- Tailwind CSS for utility-first styling
- All contributors and users of this library

---

Made with ❤️ for developers who love bold, playful design.

Visit [the website](http://localhost:3000) to see Memphi UI in action!
