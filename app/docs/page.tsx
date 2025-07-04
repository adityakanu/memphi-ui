import { Button } from "@/components/memphi/button";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Heart, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <DocsSidebar />
        
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-sans uppercase">
                <span className="bg-retro-9 px-4 py-2 border-4 border-black transform rotate-1 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Introduction
                </span>
              </h1>
              <p className="text-xl text-black max-w-3xl">
                Welcome to Memphi UI - where Memphis design meets modern React components. 
                Build interfaces that are bold, playful, and unforgettable.
              </p>
            </div>

            {/* What is Memphi UI */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">
                What is Memphi UI?
              </h2>
              
              <p className="text-black mb-6 text-lg leading-relaxed">
                Memphi UI is a React component library inspired by the vibrant Memphis design movement 
                of the 1980s, combined with modern NeoBrutalism principles. It&apos;s built for developers 
                who want to create interfaces that stand out from the crowd.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg text-center">
                  <div className="w-12 h-12 bg-retro-1 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">Bold & Playful</h3>
                  <p className="text-black text-sm">Vibrant colors and geometric shapes that bring joy to interfaces</p>
                </div>
                
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg text-center">
                  <div className="w-12 h-12 bg-retro-2 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">Developer First</h3>
                  <p className="text-black text-sm">Built with TypeScript, accessibility, and developer experience in mind</p>
                </div>
                
                <div className="bg-retro-8 p-6 border-4 border-black rounded-lg text-center">
                  <div className="w-12 h-12 bg-retro-9 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2">Copy & Paste</h3>
                  <p className="text-black text-sm">No complex installations - just copy the code and use it</p>
                </div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">
                Design Philosophy
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4 font-sans">Memphis Design</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-1 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Bold, vibrant color palettes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-2 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Geometric shapes and patterns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-9 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Playful, expressive typography</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-7 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Asymmetrical compositions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4 font-sans">NeoBrutalism</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-4 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>High contrast visual hierarchy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-5 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Thick, prominent borders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-6 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Dramatic drop shadows</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-10 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Flat design without gradients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Example */}
            <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">
                See It in Action
              </h2>
              
              <p className="text-black mb-6">
                Here&apos;s a quick example of what Memphi UI components look like:
              </p>

              <div className="bg-retro-8 p-6 border-4 border-black rounded-lg mb-4">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button>Default Button</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline" shadowColor="oklch(0.6 0.2 240)">
                    Custom Shadow
                  </Button>
                  <Button shape="rectangle" shadowColor="oklch(0.6 0.2 120)">
                    Rectangle
                  </Button>
                </div>
              </div>

              <p className="text-black text-sm">
                Notice the bold borders, vibrant shadows, and playful shapes that make each component distinctive.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-retro-7 border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl font-bold text-black mb-4 font-sans uppercase">
                Ready to Get Started?
              </h2>
              <p className="text-black text-lg mb-6">
                Follow our installation guide to set up Memphi UI in your project, 
                then explore our components to start building amazing interfaces!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs/installation">
                  <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)">
                    Installation Guide
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/docs/components/button">
                  <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)">
                    View Components
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 