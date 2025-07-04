import { Button } from "@/components/memphi/button";
import { Navigation } from "@/components/ui/navigation";
import { Download, Heart, Pause, Play, Settings, Share2, ShoppingCart, Star, User } from "lucide-react";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-sans uppercase">
            <span className="bg-retro-6 px-4 py-2 border-4 border-black transform -rotate-1 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Examples
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            See Memphi UI components in action with these real-world examples and layouts.
          </p>
        </div>

        {/* Hero Section Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Hero Section</h2>
          <div className="bg-retro-8 border-4 border-black p-12 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 font-sans uppercase">
                Build Amazing Apps with{" "}
                <span className="bg-retro-1 px-2 py-1 border-2 border-black transform rotate-1 inline-block">
                  Style
                </span>
              </h3>
              <p className="text-xl text-black mb-8">
                Create interfaces that users love with our Memphis-inspired design system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)">
                  Get Started Free
                </Button>
                <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)">
                  Watch Demo
                  <Play className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Layout Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Product Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Design System", price: "$49", color: "bg-retro-1" },
              { name: "UI Components", price: "$79", color: "bg-retro-2" },
              { name: "Full Package", price: "$99", color: "bg-retro-9" }
            ].map((product, index) => (
              <div key={index} className="bg-white border-4 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className={`w-full h-32 ${product.color} border-4 border-black rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-black" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 font-sans">{product.name}</h3>
                <p className="text-black mb-4">Everything you need to build amazing interfaces.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  <Button size="sm" shadowColor="oklch(0.7 0.2 27.3)">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bar Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Action Bar</h2>
          <div className="bg-white border-4 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-retro-2 border-2 border-black rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black">John Doe</h3>
                  <p className="text-sm text-black">Premium User</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button size="sm" variant="outline" shadowColor="oklch(0.6 0.2 240)">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" shadowColor="oklch(0.7 0.2 27.3)">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Media Player Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Media Player</h2>
          <div className="bg-white border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-retro-7 border-4 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 font-sans">Memphis Vibes</h3>
              <p className="text-black">The perfect soundtrack for design work</p>
            </div>
            
            <div className="flex justify-center gap-4 mb-6">
              <Button size="sm" variant="outline" shape="rectangle">
                Previous
              </Button>
              <Button shadowColor="oklch(0.7 0.2 27.3)">
                <Play className="w-5 h-5 mr-2" />
                Play
              </Button>
              <Button shadowColor="oklch(0.6 0.2 240)">
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </Button>
              <Button size="sm" variant="outline" shape="rectangle">
                Next
              </Button>
            </div>
            
            <div className="w-full h-2 bg-retro-8 border-2 border-black rounded-full">
              <div className="w-1/3 h-full bg-retro-2 border-r-2 border-black rounded-l-full"></div>
            </div>
          </div>
        </div>

        {/* Dashboard Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Dashboard Header</h2>
          <div className="bg-white border-4 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-black mb-2 font-sans">Dashboard</h3>
                <p className="text-black">Welcome back! Here&apos;s what&apos;s happening.</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button size="sm" variant="outline" shadowColor="oklch(0.6 0.2 240)">
                  Export Data
                </Button>
                <Button size="sm" shadowColor="oklch(0.7 0.2 27.3)">
                  New Project
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Button Variations Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-6 font-sans uppercase">Button Variations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sizes */}
            <div className="bg-white border-4 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold text-black mb-4 font-sans">Different Sizes</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button size="sm">Small</Button>
                  <span className="text-black">Perfect for compact spaces</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button size="default">Default</Button>
                  <span className="text-black">Standard button size</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button size="lg">Large</Button>
                  <span className="text-black">Great for primary actions</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button size="xl">Extra Large</Button>
                  <span className="text-black">Hero section buttons</span>
                </div>
              </div>
            </div>

            {/* Custom Colors */}
            <div className="bg-white border-4 border-black p-6 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-bold text-black mb-4 font-sans">Custom Shadow Colors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button shadowColor="oklch(0.7 0.2 27.3)">Red</Button>
                  <span className="text-black">Danger actions</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button shadowColor="oklch(0.6 0.2 240)">Blue</Button>
                  <span className="text-black">Primary actions</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button shadowColor="oklch(0.6 0.2 120)">Green</Button>
                  <span className="text-black">Success actions</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button shadowColor="oklch(0.8 0.2 300)">Purple</Button>
                  <span className="text-black">Special actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-retro-11 border-4 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-bold text-black mb-4 font-sans uppercase">
              Ready to Use These?
            </h2>
            <p className="text-black text-lg mb-6">
              Copy the Button component and start building these layouts in your project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" shadowColor="oklch(0.7 0.2 27.3)">
                Get the Button Component
              </Button>
              <Button variant="outline" size="lg" shadowColor="oklch(0.6 0.2 240)">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 