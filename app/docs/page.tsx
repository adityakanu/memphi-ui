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
        
        <div className="flex-1 lg:ml-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 lg:mb-12 mt-16 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 lg:mb-6 font-sans uppercase">
                <span className="bg-retro-9 px-2 sm:px-4 py-1 sm:py-2 border-2 sm:border-4 border-black transform rotate-1 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Introduction
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-3xl">
                Welcome to Memphi UI - where Memphis design meets modern React components. 
                Build interfaces that are bold, playful, and unforgettable.
              </p>
            </div>

            {/* What is Memphi UI */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                What is Memphi UI?
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Memphi UI is a React component library inspired by the vibrant Memphis design movement 
                of the 1980s, combined with modern NeoBrutalism principles. It&apos;s built for developers 
                who want to create interfaces that stand out from the crowd.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-retro-1 border-2 border-black rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-sm sm:text-base">Bold & Playful</h3>
                  <p className="text-black text-xs sm:text-sm">Vibrant colors and geometric shapes that bring joy to interfaces</p>
                </div>
                
                <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-retro-2 border-2 border-black rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-sm sm:text-base">Developer First</h3>
                  <p className="text-black text-xs sm:text-sm">Built with TypeScript, accessibility, and developer experience in mind</p>
                </div>
                
                <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg text-center sm:col-span-2 md:col-span-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-retro-9 border-2 border-black rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-sm sm:text-base">Copy & Paste</h3>
                  <p className="text-black text-xs sm:text-sm">No complex installations - just copy the code and use it</p>
                </div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                Design Philosophy
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Memphis Design</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-1 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Bold, vibrant color palettes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-2 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Geometric shapes and patterns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-9 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Playful, expressive typography</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-7 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Asymmetrical compositions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">NeoBrutalism</h3>
                  <ul className="space-y-2 text-black">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-4 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">High contrast visual hierarchy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-5 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Thick, prominent borders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-6 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Dramatic drop shadows</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-retro-10 border border-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Flat design without gradients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Example */}
            <div className="bg-white border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 lg:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 font-sans uppercase">
                See It in Action
              </h2>
              
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
                Here&apos;s a quick example of what Memphi UI components look like:
              </p>

              <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg mb-4">
                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
                  <Button size="sm" className="text-xs sm:text-sm">Default Button</Button>
                  <Button variant="destructive" size="sm" className="text-xs sm:text-sm">Destructive</Button>
                  <Button variant="outline" shadowColor="oklch(0.6 0.2 240)" size="sm" className="text-xs sm:text-sm">
                    Custom Shadow
                  </Button>
                  <Button shape="rectangle" shadowColor="oklch(0.6 0.2 120)" size="sm" className="text-xs sm:text-sm">
                    Rectangle
                  </Button>
                </div>
              </div>

              <p className="text-black text-xs sm:text-sm">
                Notice the bold borders, vibrant shadows, and playful shapes that make each component distinctive.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-retro-7 border-2 sm:border-4 border-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 font-sans uppercase">
                Ready to Get Started?
              </h2>
              <p className="text-black text-base sm:text-lg mb-4 sm:mb-6">
                Follow our installation guide to set up Memphi UI in your project, 
                then explore our components to start building amazing interfaces!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/docs/installation">
                  <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)" className="w-full sm:w-auto">
                    Installation Guide
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/docs/components/button">
                  <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)" className="w-full sm:w-auto">
                    View Components
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
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