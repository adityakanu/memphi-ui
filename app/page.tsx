import { Button } from "@/components/memphi/button";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Copy, Heart, Sparkles, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Memphi UI - Where Memphis design meets NeoBrutalism. A React component library with bold, playful, and accessible components for modern web applications.",
  openGraph: {
    title: "Memphi UI - Memphis Design meets NeoBrutalism",
    description: "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
    url: "https://memphi.dev",
    images: [
      {
        url: "/memphi.webp",
        width: 1200,
        height: 630,
        alt: "Memphi UI - Memphis Design meets NeoBrutalism",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphi UI - Memphis Design meets NeoBrutalism",
    description: "A React component library inspired by Memphis design and NeoBrutalism. Bold, playful, and accessible components for modern web applications.",
    images: ["/memphi.webp"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-retro-1 border-4 border-black rounded-full transform rotate-12 hidden md:block"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-retro-7 border-4 border-black transform -rotate-12 hidden md:block"></div>
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-retro-9 border-4 border-black rounded-full transform rotate-45 hidden md:block"></div>
            <div className="absolute bottom-10 right-10 w-14 h-14 bg-retro-6 border-4 border-black transform rotate-12 hidden md:block"></div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 font-sans uppercase tracking-wide">
              <span className="inline-block transform -rotate-2 bg-retro-1 px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Memphi
              </span>
              <br />
              <span className="inline-block transform rotate-1 bg-retro-2 px-4 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-4">
                UI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto font-medium">
              Where <span className="bg-retro-8 px-2 py-1 border-2 border-black transform rotate-1 inline-block">Memphis Doodles</span> meet{" "}
              <span className="bg-retro-11 px-2 py-1 border-2 border-black transform -rotate-1 inline-block">NeoBrutalism</span>
              <br />
              Build playful, bold interfaces that make users smile
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/docs">
                <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/docs/components/button">
                <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)">
                  Browse Components
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Component Preview */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-4 text-black">Try our Button component:</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button shape="rectangle" shadowColor="oklch(0.6 0.2 240)">Rectangle</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-retro-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 font-sans uppercase">
            Why Choose Memphi UI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-16 h-16 bg-retro-1 border-4 border-black rounded-full flex items-center justify-center mb-6 transform rotate-12">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-sans">Playful & Bold</h3>
              <p className="text-black">
                Memphis-inspired design with neobrutalist edges. Each component is crafted to bring joy and personality to your interfaces.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-16 h-16 bg-retro-2 border-4 border-black rounded-full flex items-center justify-center mb-6 transform -rotate-12">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-sans">Developer First</h3>
              <p className="text-black">
                Built with TypeScript, Tailwind CSS, and Radix UI. Fully accessible, customizable, and ready for production.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-16 h-16 bg-retro-9 border-4 border-black rounded-full flex items-center justify-center mb-6 transform rotate-45">
                <Copy className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 font-sans">Copy & Paste</h3>
              <p className="text-black">
                No package installations required. Just copy the component code and paste it into your project. It&apos;s that simple!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-sans uppercase">
            Ready to Build Something{" "}
            <span className="bg-retro-7 px-2 py-1 border-4 border-black transform rotate-2 inline-block">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-black mb-8">
            Join thousands of developers who are already building with Memphi UI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button size="xl" shadowColor="oklch(0.7 0.2 27.3)">
                Start Building Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="https://github.com/adityakanu/memphi-ui" target="_blank">
              <Button variant="outline" size="xl" shadowColor="oklch(0.6 0.2 240)">
                Star on GitHub
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
