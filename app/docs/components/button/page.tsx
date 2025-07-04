"use client";

import { Button } from "@/components/memphi/button";
import { CodeBlock } from "@/components/ui/code-block";
import { ComingSoon } from "@/components/ui/coming-soon";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { Navigation } from "@/components/ui/navigation";
import { OpenInV0 } from "@/components/ui/open-in-v0";
import { ArrowRight, Copy, Package, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ButtonPage() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <DocsSidebar />
        
        <div className="flex-1 lg:ml-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 lg:mb-12 mt-16 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 lg:mb-6 font-sans uppercase">
                <span className="bg-retro-2 px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black transform rotate-1 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Button
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-3xl">
                A customizable button component with Memphis-inspired design featuring multiple variants, shapes, and shadow colors.
              </p>
            </div>

            {/* Installation Methods */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                Installation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                  <h3 className="font-bold text-black mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    shadcn CLI (Recommended)
                  </h3>
                  <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4">
                    Install the Button component using the shadcn CLI:
                  </p>
                  <CodeBlock
                    title="Terminal"
                    code="npx shadcn@latest add https://memphi.dev/r/button.json"
                  />
                </div>

                <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                  <h3 className="font-bold text-black mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Manual Installation
                  </h3>
                  <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4">
                    Copy and paste the component code into your project:
                  </p>
                  <Link href="#manual-installation">
                    <Button size="sm" variant="outline" className="w-full sm:w-auto">
                      View Code Below
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-retro-11 p-3 sm:p-4 border-2 border-black rounded">
                <p className="text-black text-xs sm:text-sm">
                  <strong>Prerequisites:</strong> Make sure you have completed the <Link href="/docs/installation" className="underline font-bold">installation setup</Link> before adding components.
                </p>
              </div>
            </div>

            {/* Usage Example */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                Usage
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                <CodeBlock
                  title="Import the component"
                  code={`import { Button } from "@/components/memphi/button"

export default function Example() {
  return <Button>Click me!</Button>
}`}
                />
                <OpenInV0 
                  name="button"
                  title="Open in"
                />
              </div>
            </div>

            {/* Examples with Tabs */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-black font-sans uppercase">
                  Examples
                </h2>
                <div className="flex bg-retro-8 border-2 border-black rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 sm:px-4 py-2 font-medium transition-colors text-sm sm:text-base ${
                      activeTab === "preview"
                        ? "bg-black text-white"
                        : "text-black hover:bg-retro-1"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 sm:px-4 py-2 font-medium transition-colors text-sm sm:text-base ${
                      activeTab === "code"
                        ? "bg-black text-white"
                        : "text-black hover:bg-retro-1"
                    }`}
                  >
                    Code
                  </button>
                </div>
              </div>

              {/* Variants */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Variants</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                      <Button size="sm" className="text-xs sm:text-sm">Default</Button>
                      <Button variant="destructive" size="sm" className="text-xs sm:text-sm">Destructive</Button>
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">Outline</Button>
                      <Button variant="secondary" size="sm" className="text-xs sm:text-sm">Secondary</Button>
                      <Button variant="ghost" size="sm" className="text-xs sm:text-sm">Ghost</Button>
                      <Button variant="link" size="sm" className="text-xs sm:text-sm">Link</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Variants Example"
                      code={`<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                    />
                    <OpenInV0 
                      name="button"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Shapes */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Shapes</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                      <Button shape="oval" size="sm" className="text-xs sm:text-sm">Oval (Default)</Button>
                      <Button shape="rectangle" size="sm" className="text-xs sm:text-sm">Rectangle</Button>
                      <Button shape="rectangle" variant="destructive" size="sm" className="text-xs sm:text-sm">Rectangle Destructive</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Shapes Example"
                      code={`<Button shape="oval">Oval (Default)</Button>
<Button shape="rectangle">Rectangle</Button>
<Button shape="rectangle" variant="destructive">Rectangle Destructive</Button>`}
                    />
                    <OpenInV0 
                      name="button"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Sizes</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="xl">Extra Large</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <CodeBlock
                      title="Sizes Example"
                      code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
                    />
                    <OpenInV0 
                      name="button"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Custom Shadow Colors */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4 font-sans">Custom Shadow Colors</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-6 border-4 border-black rounded-lg">
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button shadowColor="oklch(0.7 0.2 27.3)">Red Shadow</Button>
                      <Button shadowColor="oklch(0.6 0.2 240)" shape="rectangle">Blue Shadow</Button>
                      <Button shadowColor="oklch(0.6 0.2 120)" variant="outline">Green Shadow</Button>
                      <Button shadowColor="oklch(0.8 0.2 300)" variant="secondary">Purple Shadow</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <CodeBlock
                      title="Custom Shadow Colors Example"
                      code={`<Button shadowColor="oklch(0.7 0.2 27.3)">Red Shadow</Button>
<Button shadowColor="oklch(0.6 0.2 240)" shape="rectangle">Blue Shadow</Button>
<Button shadowColor="oklch(0.6 0.2 120)" variant="outline">Green Shadow</Button>
<Button shadowColor="oklch(0.8 0.2 300)" variant="secondary">Purple Shadow</Button>`}
                    />
                    <OpenInV0 
                      name="button"
                      title="Open in"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Props Documentation */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">
                Props
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black">
                  <thead>
                    <tr className="bg-retro-1">
                      <th className="border-2 border-black p-3 text-left font-bold">Prop</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Type</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Default</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-3 font-mono text-sm">variant</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">default</td>
                      <td className="border-2 border-black p-3 text-sm">Button variant: default | destructive | outline | secondary | ghost | link</td>
                    </tr>
                    <tr className="bg-retro-8">
                      <td className="border-2 border-black p-3 font-mono text-sm">shape</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">oval</td>
                      <td className="border-2 border-black p-3 text-sm">Button shape: oval | rectangle</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-3 font-mono text-sm">size</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">default</td>
                      <td className="border-2 border-black p-3 text-sm">Button size: sm | default | lg | xl | icon</td>
                    </tr>
                    <tr className="bg-retro-8">
                      <td className="border-2 border-black p-3 font-mono text-sm">shadowColor</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">rgba(0,0,0,1)</td>
                      <td className="border-2 border-black p-3 text-sm">Custom shadow color in any CSS color format</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border-2 border-black p-3 font-mono text-sm">asChild</td>
                      <td className="border-2 border-black p-3 text-sm">boolean</td>
                      <td className="border-2 border-black p-3 text-sm">false</td>
                      <td className="border-2 border-black p-3 text-sm">Change the component to the passed child (Radix UI pattern)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Manual Installation */}
            <div id="manual-installation" className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">
                Manual Installation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4 font-sans">1. Copy the component code</h3>
                  <CodeBlock
                    title="components/memphi/button.tsx"
                    maxLines={20}
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
                  <h3 className="text-xl font-bold text-black mb-4 font-sans">2. Install dependencies</h3>
                  <CodeBlock
                    title="Terminal"
                    code="npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4 font-sans">3. Add utility function (if not already added)</h3>
                  <CodeBlock
                    title="lib/utils.ts"
                    code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                  />
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <div className="bg-retro-11 border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold text-black mb-4 font-sans uppercase">
                  Ready to Build?
                </h2>
                <p className="text-black text-lg mb-6">
                  Start using the Button component in your project and explore more examples!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/examples">
                    <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)">
                      View Examples
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)">
                      Back to Docs
                      <Package className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComingSoon />  
    </div>
  );
} 