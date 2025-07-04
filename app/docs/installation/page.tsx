import { Button } from "@/components/memphi/button";
import { CodeBlock } from "@/components/ui/code-block";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Package, Palette, Terminal } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation",
  description: "Learn how to install and set up Memphi UI in your Next.js project. Step-by-step guide with dependencies, configuration, and theme setup.",
  openGraph: {
    title: "Memphi UI Installation Guide",
    description: "Learn how to install and set up Memphi UI in your Next.js project. Step-by-step guide with dependencies, configuration, and theme setup.",
    url: "https://memphi.dev/docs/installation",
    images: [
      {
        url: "/memphi.webp",
        width: 1200,
        height: 630,
        alt: "Memphi UI Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphi UI Installation Guide",
    description: "Learn how to install and set up Memphi UI in your Next.js project. Step-by-step guide with dependencies, configuration, and theme setup.",
    images: ["/memphi.webp"],
  },
};

export default function InstallationPage() {
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
                <span className="bg-retro-6 text-white px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black transform -rotate-1 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Installation
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-3xl">
                Memphi UI ❤️ Next.js. Get started in minutes with our step-by-step installation guide.
              </p>
            </div>

            {/* Step 1: Create Project */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-1 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">1</span>
                </div>
                Create Project
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                Run the init command to create a new Next.js project or to setup an existing one:
              </p>

              <CodeBlock
                title="Terminal"
                code="npx create-next-app@latest my-memphi-app --typescript --tailwind --eslint --app"
              />

              <p className="text-black mt-3 sm:mt-4 text-xs sm:text-sm">
                This creates a new Next.js project with TypeScript and Tailwind CSS configured.
              </p>
            </div>

            {/* Step 2: Install Dependencies */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-2 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">2</span>
                </div>
                Install Dependencies
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                Install the required dependencies for Memphi UI components:
              </p>

              <CodeBlock
                title="Terminal"
                code="npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge"
              />

              <div className="mt-4 sm:mt-6 bg-retro-8 p-3 sm:p-4 border-2 border-black rounded">
                <p className="text-black text-xs sm:text-sm">
                  <strong>What these packages do:</strong><br/>
                  • <code className="bg-white px-1 border border-black rounded text-xs">@radix-ui/react-slot</code> - Accessible component composition<br/>
                  • <code className="bg-white px-1 border border-black rounded text-xs">class-variance-authority</code> - Type-safe component variants<br/>
                  • <code className="bg-white px-1 border border-black rounded text-xs">clsx</code> - Conditional class names<br/>
                  • <code className="bg-white px-1 border border-black rounded text-xs">tailwind-merge</code> - Merge Tailwind classes safely
                </p>
              </div>
            </div>

            {/* Step 3: Add Utilities */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-9 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">3</span>
                </div>
                Add Utilities
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                Create the utility function for merging classes. Add this to <code className="bg-retro-8 px-2 py-1 border border-black rounded text-xs sm:text-sm">lib/utils.ts</code>:
              </p>

              <CodeBlock
                title="lib/utils.ts"
                code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
              />
            </div>

            {/* Step 4: Configure Theme */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-7 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">4</span>
                </div>
                Add Theme
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                Add Memphi UI colors to your Tailwind configuration. Update your <code className="bg-retro-8 px-2 py-1 border border-black rounded text-xs sm:text-sm">globals.css</code>:
              </p>

              <CodeBlock
                title="globals.css"
                maxLines={10}
                code={`
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
`}
              />
            </div>

            {/* Step 5: Add Fonts (Optional) */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-10 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">5</span>
                </div>
                Add Fonts (Optional)
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                We use <strong>Comic Neue</strong> for that playful Memphis feel. Add it to your layout:
              </p>

              <CodeBlock
                title="app/layout.tsx"
                maxLines={12}
                code={`import { Comic_Neue } from 'next/font/google'
import './globals.css'

const comicNeue = Comic_Neue({
  variable: '--font-comic-neue',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={\`\${comicNeue.variable} antialiased\`}>
        {children}
      </body>
    </html>
  )
}`}
              />

              <div className="mt-4 sm:mt-6">
                <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base">Then update your Tailwind config to use the font:</p>
                <CodeBlock
                  title="tailwind.config.js (add to theme.extend)"
                  code={`fontFamily: {
  sans: ['var(--font-comic-neue)', 'Comic Neue', 'cursive'],
}`}
                />
              </div>
            </div>

            {/* Step 6: That's it! */}
            <div className="bg-retro-11 border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-retro-5 border-2 border-black rounded-full mr-2 sm:mr-3 flex items-center justify-center">
                  <span className="text-black font-bold text-xs sm:text-sm">✓</span>
                </div>
                That&apos;s it! 🚀
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg">
                Now you can start using Memphi UI components in your project. 
                You can install them manually by copying the code.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                  <h3 className="font-bold text-black mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Manual Installation
                  </h3>
                  <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4">
                    Copy the component code from our documentation and paste it into your project.
                  </p>
                  <Link href="/docs/components/button">
                    <Button size="sm" shadowColor="oklch(0.7 0.2 27.3)" className="w-full sm:w-auto">
                      View Components
                    </Button>
                  </Link>
                </div>

                <div className="bg-white p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                  <h3 className="font-bold text-black mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    shadcn CLI (Coming Soon)
                  </h3>
                  <p className="text-black text-xs sm:text-sm mb-3 sm:mb-4">
                    Install components directly via the shadcn CLI for even faster setup.
                  </p>
                  <Button size="sm" variant="outline" disabled className="w-full sm:w-auto">
                    Coming Soon
                  </Button>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-4 border-2 border-black rounded">
                <h4 className="font-bold text-black mb-2 text-sm sm:text-base">Example Usage:</h4>
                <CodeBlock
                  title="Example Component"
                  code={`import { Button } from "@/components/memphi/button"

export default function MyPage() {
  return (
    <div className="p-8">
      <Button>Hello Memphi UI!</Button>
      <Button variant="outline" shadowColor="oklch(0.6 0.2 240)">
        Custom Shadow
      </Button>
    </div>
  )
}`}
                />
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-center">
              <div className="bg-retro-2 border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 font-sans uppercase">
                  What&apos;s Next?
                </h2>
                <p className="text-black text-base sm:text-lg mb-4 sm:mb-6">
                  Explore our components and start building amazing interfaces with Memphis flair!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href="/docs/components/button">
                    <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)" className="w-full sm:w-auto">
                      Explore Components
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/examples">
                    <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)" className="w-full sm:w-auto">
                      View Examples
                      <Palette className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 