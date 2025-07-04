"use client";

import { Button } from "@/components/memphi/button";
import { Navigation } from "@/components/ui/navigation";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

function CodeBlock({ code, title }: { code: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-green-400 p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-retro-1">{title}</span>
        <button
          onClick={copyToClipboard}
          className="text-white hover:text-retro-1 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-sans uppercase">
            <span className="bg-retro-1 px-4 py-2 border-4 border-black transform -rotate-1 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Components
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Copy and paste these beautiful, accessible components into your project. 
            No installation required - just pure Memphis magic! ✨
          </p>
        </div>

        {/* Button Component Section */}
        <div className="mb-20">
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase flex items-center">
              <div className="w-8 h-8 bg-retro-2 border-2 border-black rounded-full mr-3 transform rotate-12"></div>
              Button
            </h2>
            
            <p className="text-black mb-8 text-lg">
              A customizable button component with Memphis-inspired design. 
              Features multiple variants, shapes, and shadow colors.
            </p>

            {/* Examples */}
            <div className="space-y-8">
              {/* Default Variants */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Variants</h3>
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button>Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <CodeBlock
                    title="Variants Example"
                    code={`<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                  />
                </div>
              </div>

              {/* Shapes */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Shapes</h3>
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button shape="oval">Oval (Default)</Button>
                    <Button shape="rectangle">Rectangle</Button>
                    <Button shape="rectangle" variant="destructive">Rectangle Destructive</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <CodeBlock
                    title="Shapes Example"
                    code={`<Button shape="oval">Oval (Default)</Button>
<Button shape="rectangle">Rectangle</Button>
<Button shape="rectangle" variant="destructive">Rectangle Destructive</Button>`}
                  />
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Sizes</h3>
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                  <div className="flex flex-wrap gap-4 justify-center items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <CodeBlock
                    title="Sizes Example"
                    code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
                  />
                </div>
              </div>

              {/* Custom Shadow Colors */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Custom Shadow Colors</h3>
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button shadowColor="oklch(0.7 0.2 27.3)">Red Shadow</Button>
                    <Button shadowColor="oklch(0.6 0.2 240)" shape="rectangle">Blue Shadow</Button>
                    <Button shadowColor="oklch(0.6 0.2 120)" variant="outline">Green Shadow</Button>
                    <Button shadowColor="oklch(0.8 0.2 300)" variant="secondary">Purple Shadow</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <CodeBlock
                    title="Custom Shadow Colors Example"
                    code={`<Button shadowColor="oklch(0.7 0.2 27.3)">Red Shadow</Button>
<Button shadowColor="oklch(0.6 0.2 240)" shape="rectangle">Blue Shadow</Button>
<Button shadowColor="oklch(0.6 0.2 120)" variant="outline">Green Shadow</Button>
<Button shadowColor="oklch(0.8 0.2 300)" variant="secondary">Purple Shadow</Button>`}
                  />
                </div>
              </div>
            </div>

            {/* Installation */}
            <div className="mt-12 pt-8 border-t-4 border-black">
              <h3 className="text-2xl font-bold text-black mb-6 font-sans uppercase">Installation</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-black mb-2">1. Copy the component code</h4>
                  <CodeBlock
                    title="components/memphi/button.tsx"
                    code={`import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

type ButtonShape = 'oval' | 'rectangle'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-sans font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black font-bold uppercase tracking-wide transform transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "bg-destructive text-white",
        outline: "bg-white text-black border-2 border-black",
        secondary: "bg-secondary text-black",
        ghost: "bg-transparent border-transparent text-black hover:bg-accent hover:border-black",
        link: "text-black underline-offset-4 hover:underline border-transparent shadow-none hover:shadow-none active:translate-x-0 active:translate-y-0",
      },
      shape: {
        oval: "rounded-3xl",
        rectangle: "rounded-md",
      },
      hasShadow: {
        true: "shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        false: ""
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "destructive", "outline", "secondary"],
        hasShadow: true,
        className: "shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5"
      },
    ],
    defaultVariants: {
      variant: "default",
      shape: "oval",
      hasShadow: true,
      size: "default",
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  shape?: ButtonShape
  shadowColor?: string
}

function Button({
  className,
  variant,
  shape = 'oval',
  size,
  asChild = false,
  shadowColor = 'rgba(0,0,0,1)',
  style,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const hasShadow = variant !== 'ghost' && variant !== 'link'

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, shape, size, hasShadow, className }),
        {
          'shadow-[--shadow-color]': hasShadow,
        }
      )}
      style={{
        ...style,
        '--shadow-color': shadowColor,
      } as React.CSSProperties}
      {...props}
    />
  )
}

export { Button, buttonVariants }`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-black mb-2">2. Install dependencies</h4>
                  <CodeBlock
                    title="Terminal"
                    code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-black mb-2">3. Add the utility function</h4>
                  <CodeBlock
                    title="lib/utils.ts"
                    code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-black mb-2">4. Use the component</h4>
                  <CodeBlock
                    title="Usage"
                    code={`import { Button } from "@/components/memphi/button"

export default function MyComponent() {
  return (
    <Button>Click me!</Button>
  )
}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <div className="bg-retro-11 border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold text-black mb-4 font-sans uppercase">
              More Components Coming Soon! 🚀
            </h2>
            <p className="text-black text-lg mb-6">
              We&apos;re working hard to bring you more Memphis-inspired components. 
              Stay tuned for inputs, cards, modals, and more!
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 bg-retro-1 border-4 border-black rounded-full transform rotate-12 animate-bounce"></div>
              <div className="w-12 h-12 bg-retro-2 border-4 border-black transform -rotate-12 animate-bounce delay-100"></div>
              <div className="w-12 h-12 bg-retro-9 border-4 border-black rounded-full transform rotate-45 animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 