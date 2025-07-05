"use client";

import { Input } from "@/components/memphi/input";
import { CodeBlock } from "@/components/ui/code-block";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { Navigation } from "@/components/ui/navigation";
import { OpenInV0 } from "@/components/ui/open-in-v0";
import { Copy, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function InputPage() {
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
                <span className="bg-retro-9 px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black transform rotate-1 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Input
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-3xl">
                A Memphis-style input component with conditional shadow support and dotted border states on focus.
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
                    Install the Input component using the shadcn CLI:
                  </p>
                  <CodeBlock
                    title="Terminal"
                    code="npx shadcn@latest add https://memphi.dev/r/input.json"
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
                    <button className="w-full sm:w-auto px-3 py-1 bg-white border-2 border-black rounded text-sm font-bold hover:bg-retro-1 transition-colors">
                      View Code Below
                    </button>
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
                  code={`import { Input } from "@/components/memphi/input"

export default function Example() {
  return (
    <div className="space-y-4">
      <Input placeholder="Basic input" />
      <Input 
        shadowColor="oklch(0.7 0.2 27.3)" 
        placeholder="Input with shadow" 
      />
    </div>
  )
}`}
                />
                <OpenInV0 
                  name="input"
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

              {/* Basic Examples */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Basic Usage</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Default Input</label>
                      <Input placeholder="Type something..." />
                      <p className="text-xs text-gray-600 mt-1">Focus to see dotted border effect</p>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Input with Shadow</label>
                      <Input shadowColor="oklch(0.7 0.2 27.3)" placeholder="Input with red shadow..." />
                      <p className="text-xs text-gray-600 mt-1">Focus: dotted border + shadow moves</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Basic Examples"
                      code={`// Basic input without shadow
<Input placeholder="Type something..." />

// Input with shadow
<Input 
  shadowColor="oklch(0.7 0.2 27.3)" 
  placeholder="Input with red shadow..." 
/>`}
                    />
                    <OpenInV0 
                      name="input"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Variants */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Variants</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Default</label>
                      <Input placeholder="Default variant" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Destructive</label>
                      <Input variant="destructive" placeholder="Error state" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Success</label>
                      <Input variant="success" placeholder="Success state" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Warning</label>
                      <Input variant="warning" placeholder="Warning state" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Variants Example"
                      code={`<Input placeholder="Default variant" />
<Input variant="destructive" placeholder="Error state" />
<Input variant="success" placeholder="Success state" />
<Input variant="warning" placeholder="Warning state" />`}
                    />
                    <OpenInV0 
                      name="input"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Sizes */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Sizes</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Small</label>
                      <Input size="sm" shadowColor="oklch(0.7 0.2 27.3)" placeholder="Small input" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Default</label>
                      <Input shadowColor="oklch(0.6 0.2 240)" placeholder="Default size" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Large</label>
                      <Input size="lg" shadowColor="oklch(0.6 0.2 120)" placeholder="Large input" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Sizes Example"
                      code={`<Input size="sm" placeholder="Small input" />
<Input placeholder="Default size" />
<Input size="lg" placeholder="Large input" />`}
                    />
                    <OpenInV0 
                      name="input"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Shadow Colors */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Shadow Colors</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Red Shadow</label>
                      <Input shadowColor="oklch(0.7 0.2 27.3)" placeholder="Red shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Blue Shadow</label>
                      <Input shadowColor="oklch(0.6 0.2 240)" placeholder="Blue shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Green Shadow</label>
                      <Input shadowColor="oklch(0.6 0.2 120)" placeholder="Green shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Purple Shadow</label>
                      <Input shadowColor="oklch(0.8 0.2 300)" placeholder="Purple shadow" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Shadow Colors Example"
                      code={`<Input shadowColor="oklch(0.7 0.2 27.3)" placeholder="Red shadow" />
<Input shadowColor="oklch(0.6 0.2 240)" placeholder="Blue shadow" />
<Input shadowColor="oklch(0.6 0.2 120)" placeholder="Green shadow" />
<Input shadowColor="oklch(0.8 0.2 300)" placeholder="Purple shadow" />`}
                    />
                    <OpenInV0 
                      name="input"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Form Example */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Form Example</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <form className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">Name</label>
                        <Input shadowColor="oklch(0.7 0.2 27.3)" placeholder="Enter your name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">Email</label>
                        <Input type="email" shadowColor="oklch(0.6 0.2 240)" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">Password</label>
                        <Input type="password" shadowColor="oklch(0.6 0.2 120)" placeholder="Enter your password" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">Message (No Shadow)</label>
                        <Input placeholder="Leave a message..." />
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Form Example"
                      code={`<form className="space-y-4">
  <div>
    <label>Name</label>
    <Input 
      shadowColor="oklch(0.7 0.2 27.3)" 
      placeholder="Enter your name" 
      required 
    />
  </div>
  <div>
    <label>Email</label>
    <Input 
      type="email" 
      shadowColor="oklch(0.6 0.2 240)" 
      placeholder="Enter your email" 
      required 
    />
  </div>
  <div>
    <label>Password</label>
    <Input 
      type="password" 
      shadowColor="oklch(0.6 0.2 120)" 
      placeholder="Enter your password" 
      required 
    />
  </div>
  <div>
    <label>Message (No Shadow)</label>
    <Input placeholder="Leave a message..." />
  </div>
</form>`}
                    />
                    <OpenInV0 
                      name="input"
                      title="Open in"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* API Reference */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                API Reference
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black">
                  <thead>
                    <tr className="bg-retro-8">
                      <th className="border-2 border-black p-3 text-left font-bold">Prop</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Type</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Default</th>
                      <th className="border-2 border-black p-3 text-left font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-black p-3 font-mono text-sm">variant</td>
                      <td className="border-2 border-black p-3 text-sm">"default" | "destructive" | "success" | "warning"</td>
                      <td className="border-2 border-black p-3 text-sm">"default"</td>
                      <td className="border-2 border-black p-3 text-sm">The visual style variant</td>
                    </tr>
                    <tr className="bg-retro-11">
                      <td className="border-2 border-black p-3 font-mono text-sm">size</td>
                      <td className="border-2 border-black p-3 text-sm">"sm" | "default" | "lg"</td>
                      <td className="border-2 border-black p-3 text-sm">"default"</td>
                      <td className="border-2 border-black p-3 text-sm">The size of the input</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-3 font-mono text-sm">shadowColor</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">undefined</td>
                      <td className="border-2 border-black p-3 text-sm">Color for the shadow. If provided, shadow is applied</td>
                    </tr>
                    <tr className="bg-retro-11">
                      <td className="border-2 border-black p-3 font-mono text-sm">className</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">-</td>
                      <td className="border-2 border-black p-3 text-sm">Additional CSS classes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-retro-8 border-2 border-black rounded">
                <p className="text-black text-sm">
                  <strong>Note:</strong> The Input component extends all standard HTML input attributes except <code className="bg-white px-1 border border-black rounded">size</code> (which conflicts with our variant size).
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-retro-11 border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                How It Works
              </h2>
              
              <div className="space-y-4 text-black">
                <div>
                  <h3 className="font-bold mb-2 text-lg">✨ Shadow Behavior</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>If <code className="bg-white px-1 border border-black rounded">shadowColor</code> is provided → Shadow is applied</li>
                    <li>If no <code className="bg-white px-1 border border-black rounded">shadowColor</code> → No shadow, only border transitions</li>
                    <li>Shadow uses CSS <code className="bg-white px-1 border border-black rounded">box-shadow</code> with the specified color</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">🎯 Focus States</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li><strong>Without Shadow:</strong> Border becomes dotted on focus</li>
                    <li><strong>With Shadow:</strong> Border becomes dotted + input translates closer to shadow</li>
                    <li>Smooth 200ms transitions for all state changes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">🎨 Design Philosophy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>Memphis design principles with bold borders and vibrant colors</li>
                    <li>NeoBrutalism aesthetics with high contrast and geometric shapes</li>
                    <li>Conditional shadow system for flexible design options</li>
                    <li>Accessible focus states with clear visual feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manual Installation */}
            <div id="manual-installation" className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                Manual Installation
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">1. Copy the component code</h3>
                  <CodeBlock
                    title="components/memphi/input.tsx"
                    code={`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  [
    // Base styles
    "flex h-10 w-full rounded-md border-2 border-black bg-white px-3 py-2",
    "text-sm text-black placeholder:text-gray-500",
    "transition-all duration-200 ease-in-out",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    // Focus styles with dotted border
    "focus:outline-none focus:border-dashed focus:border-2",
    // Invalid styles
    "aria-invalid:border-red-500"
  ],
  {
    variants: {
      variant: {
        default: "border-black",
        destructive: "border-red-500",
        success: "border-green-500",
        warning: "border-yellow-500",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  shadowColor?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, shadowColor, style, ...props }, ref) => {
    const hasShadow = Boolean(shadowColor)
    
    const shadowStyle = hasShadow
      ? {
          boxShadow: \`4px 4px 0px 0px \${shadowColor}\`,
          ...style,
        }
      : style

    const shadowClasses = hasShadow
      ? [
          // Shadow container positioning
          "relative",
          // Focus state with shadow - border becomes dotted but shadow border stays solid
          "focus:translate-x-[2px] focus:translate-y-[2px]",
          // Add pseudo-element for the shadow that stays solid
          "before:absolute before:inset-0 before:rounded-md before:border-2 before:border-black before:bg-transparent",
          "before:translate-x-[4px] before:translate-y-[4px] before:-z-10",
          "before:transition-all before:duration-200",
          "focus:before:translate-x-[2px] focus:before:translate-y-[2px]",
        ]
      : []

    return (
      <div className={cn(hasShadow && "relative inline-block")}>
        <input
          className={cn(
            inputVariants({ variant, size }),
            ...shadowClasses,
            className
          )}
          style={shadowStyle}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-2">2. Update your import paths</h3>
                  <p className="text-black text-sm mb-3">
                    Make sure you have the required dependencies installed and the utility function available:
                  </p>
                  <CodeBlock
                    title="Required dependencies"
                    code={`npm install class-variance-authority clsx tailwind-merge`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 