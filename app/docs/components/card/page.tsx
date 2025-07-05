"use client";

import { Button } from "@/components/memphi/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/memphi/card";
import { Input } from "@/components/memphi/input";
import { CodeBlock } from "@/components/ui/code-block";
import { DocsSidebar } from "@/components/ui/docs-sidebar";
import { Navigation } from "@/components/ui/navigation";
import { OpenInV0 } from "@/components/ui/open-in-v0";
import { Copy, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CardPage() {
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
                  Card
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-black max-w-3xl">
                A Memphis-style card component with pin and tilt animation variants for creating engaging content containers.
              </p>
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

              {/* Default Variant */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Default Variant</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Default Card</CardTitle>
                          <CardDescription>Clean and modular design</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Perfect for building complex components with Memphis styling.</p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm">Action</Button>
                        </CardFooter>
                      </Card>

                      <Card shadowColor="red">
                        <CardHeader>
                          <CardTitle>Red Shadow</CardTitle>
                          <CardDescription>With colored shadow</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Add personality with vibrant shadow colors.</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="destructive" size="sm">Delete</Button>
                        </CardFooter>
                      </Card>

                      <Card shadowColor="blue">
                        <CardHeader>
                          <CardTitle>Blue Shadow</CardTitle>
                          <CardDescription>Professional look</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Great for business applications.</p>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.6 0.2 240)" size="sm">Learn More</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Default Examples"
                      code={`// Basic card
<Card>
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>Clean and modular design</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Perfect for building complex components.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>

// With colored shadow
<Card shadowColor="red">
  <CardHeader>
    <CardTitle>Red Shadow</CardTitle>
    <CardDescription>With colored shadow</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Add personality with vibrant shadows.</p>
  </CardContent>
  <CardFooter>
    <Button variant="destructive" size="sm">Delete</Button>
  </CardFooter>
</Card>`}
                    />
                    <OpenInV0 
                      name="card"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Pin Variant */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Pin Variant</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card variant="pin">
                        <CardHeader>
                          <CardTitle>Pinned Card</CardTitle>
                          <CardDescription>With push pin decoration</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Perfect for notices and highlighted content.</p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm">Pin This</Button>
                        </CardFooter>
                      </Card>

                      <Card variant="pin" pinColor="oklch(0.6 0.2 240)" shadowColor="blue">
                        <CardHeader>
                          <CardTitle>Blue Pin</CardTitle>
                          <CardDescription>Custom pin color</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Customize the pin color to match your theme.</p>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.6 0.2 240)" size="sm">Save</Button>
                        </CardFooter>
                      </Card>

                      <Card variant="pin" pinColor="oklch(0.6 0.2 120)" shadowColor="green">
                        <CardHeader>
                          <CardTitle>Green Pin</CardTitle>
                          <CardDescription>Success state</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Great for completed tasks or success messages.</p>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.6 0.2 120)" size="sm">Complete</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Pin Variant Examples"
                      code={`// Basic pin variant
<Card variant="pin">
  <CardHeader>
    <CardTitle>Pinned Card</CardTitle>
    <CardDescription>With push pin decoration</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Perfect for notices and highlighted content.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Pin This</Button>
  </CardFooter>
</Card>

// Custom pin color
<Card variant="pin" pinColor="oklch(0.6 0.2 240)" shadowColor="blue">
  <CardHeader>
    <CardTitle>Blue Pin</CardTitle>
    <CardDescription>Custom pin color</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Customize the pin color to match your theme.</p>
  </CardContent>
  <CardFooter>
    <Button shadowColor="oklch(0.6 0.2 240)" size="sm">Save</Button>
  </CardFooter>
</Card>`}
                    />
                    <OpenInV0 
                      name="card"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Tilt Variant */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Tilt Variant (Hover to see animation)</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Card variant="tilt">
                        <CardHeader>
                          <CardTitle>Tilted Card</CardTitle>
                          <CardDescription>Hover for animation</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Starts tilted and straightens on hover with scale effect.</p>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm">Hover Me</Button>
                        </CardFooter>
                      </Card>

                      <Card variant="tilt" shadowColor="purple">
                        <CardHeader>
                          <CardTitle>Purple Tilt</CardTitle>
                          <CardDescription>Playful animation</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Perfect for creative interfaces with personality.</p>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.8 0.2 300)" size="sm">Explore</Button>
                        </CardFooter>
                      </Card>

                      <Card variant="tilt" shadowColor="yellow">
                        <CardHeader>
                          <CardTitle>Yellow Tilt</CardTitle>
                          <CardDescription>Attention-grabbing</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">Great for featured content or call-to-action cards.</p>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.8 0.2 60)" size="sm">Featured</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Tilt Variant Examples"
                      code={`// Basic tilt variant
<Card variant="tilt">
  <CardHeader>
    <CardTitle>Tilted Card</CardTitle>
    <CardDescription>Hover for animation</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Starts tilted and straightens on hover.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Hover Me</Button>
  </CardFooter>
</Card>

// With colored shadow
<Card variant="tilt" shadowColor="purple">
  <CardHeader>
    <CardTitle>Purple Tilt</CardTitle>
    <CardDescription>Playful animation</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Perfect for creative interfaces.</p>
  </CardContent>
  <CardFooter>
    <Button shadowColor="oklch(0.8 0.2 300)" size="sm">Explore</Button>
  </CardFooter>
</Card>`}
                    />
                    <OpenInV0 
                      name="card"
                      title="Open in"
                    />
                  </div>
                )}
              </div>

              {/* Complex Examples */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-sans">Examples</h3>
                {activeTab === "preview" ? (
                  <div className="bg-retro-8 p-4 sm:p-6 border-2 sm:border-4 border-black rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card variant="pin" pinColor="oklch(0.7 0.2 27.3)" shadowColor="red">
                        <CardHeader>
                          <CardTitle>Contact Form</CardTitle>
                          <CardDescription>Get in touch with us</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Input placeholder="Your name" shadowColor="oklch(0.7 0.2 27.3)" />
                          <Input type="email" placeholder="Your email" shadowColor="oklch(0.6 0.2 240)" />
                          <Input placeholder="Subject" shadowColor="oklch(0.6 0.2 120)" />
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.7 0.2 27.3)" className="w-full">Send Message</Button>
                        </CardFooter>
                      </Card>

                      <Card variant="tilt" shadowColor="green">
                        <CardHeader>
                          <CardTitle>Product Card</CardTitle>
                          <CardDescription>Memphis Design Kit</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="bg-retro-8 p-3 border-2 border-black rounded">
                              <p className="text-sm font-bold">Features:</p>
                              <ul className="text-sm text-gray-700 mt-1">
                                <li>• 50+ Components</li>
                                <li>• Memphis Styling</li>
                                <li>• Fully Responsive</li>
                              </ul>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-black">$49</span>
                              <span className="text-sm text-gray-600 line-through">$99</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button shadowColor="oklch(0.6 0.2 120)" className="w-full">Buy Now</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <CodeBlock
                      title="Complex Examples"
                      code={`// Contact form card
<Card variant="pin" pinColor="oklch(0.7 0.2 27.3)" shadowColor="red">
  <CardHeader>
    <CardTitle>Contact Form</CardTitle>
    <CardDescription>Get in touch with us</CardDescription>
  </CardHeader>
  <CardContent className="space-y-3">
    <Input placeholder="Your name" shadowColor="oklch(0.7 0.2 27.3)" />
    <Input type="email" placeholder="Your email" shadowColor="oklch(0.6 0.2 240)" />
    <Input placeholder="Subject" shadowColor="oklch(0.6 0.2 120)" />
  </CardContent>
  <CardFooter>
    <Button shadowColor="oklch(0.7 0.2 27.3)" className="w-full">Send</Button>
  </CardFooter>
</Card>

// Product card with pricing
<Card variant="tilt" shadowColor="green">
  <CardHeader>
    <CardTitle>Product Card</CardTitle>
    <CardDescription>Memphis Design Kit</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="bg-retro-8 p-3 border-2 border-black rounded">
        <p className="text-sm font-bold">Features:</p>
        <ul className="text-sm text-gray-700 mt-1">
          <li>• 50+ Components</li>
          <li>• Memphis Styling</li>
          <li>• Fully Responsive</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-black">$49</span>
        <span className="text-sm text-gray-600 line-through">$99</span>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button shadowColor="oklch(0.6 0.2 120)" className="w-full">Buy Now</Button>
  </CardFooter>
</Card>`}
                    />
                    <OpenInV0 
                      name="card"
                      title="Open in"
                    />
                  </div>
                )}
              </div>
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
                    Install the Card component using the shadcn CLI:
                  </p>
                  <CodeBlock
                    title="Terminal"
                    code="npx shadcn@latest add https://memphi.dev/r/card.json"
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
                  code={`import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/memphi/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
                />
                <OpenInV0 
                  name="card"
                  title="Open in"
                />
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
                      <td className="border-2 border-black p-3 text-sm">&quot;default&quot; | &quot;pin&quot; | &quot;tilt&quot;</td>
                      <td className="border-2 border-black p-3 text-sm">&quot;default&quot;</td>
                      <td className="border-2 border-black p-3 text-sm">The visual style variant</td>
                    </tr>
                    <tr className="bg-retro-11">
                      <td className="border-2 border-black p-3 font-mono text-sm">shadowColor</td>
                      <td className="border-2 border-black p-3 text-sm">&quot;default&quot; | &quot;red&quot; | &quot;blue&quot; | &quot;green&quot; | &quot;yellow&quot; | &quot;purple&quot;</td>
                      <td className="border-2 border-black p-3 text-sm">&quot;default&quot;</td>
                      <td className="border-2 border-black p-3 text-sm">The color of the card shadow</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-3 font-mono text-sm">pinColor</td>
                      <td className="border-2 border-black p-3 text-sm">string</td>
                      <td className="border-2 border-black p-3 text-sm">&quot;oklch(0.7 0.2 27.3)&quot;</td>
                      <td className="border-2 border-black p-3 text-sm">Color of the push pin (pin variant only)</td>
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
                  <strong>Note:</strong> The Card component extends all standard HTML div attributes and includes sub-components: CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
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
                  <h3 className="font-bold mb-2 text-lg">🎯 Default Variant</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>Clean Memphis styling with bold borders and shadows</li>
                    <li>Perfect for building complex components</li>
                    <li>Modular design with Header, Content, and Footer sections</li>
                    <li>Customizable shadow colors for visual variety</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">📌 Pin Variant</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>Realistic SVG push pin with 3D depth and shadows</li>
                    <li>Pin appears to penetrate the card surface</li>
                    <li>Dotted circle shows entry point on card</li>
                    <li>Customizable pin color to match your theme</li>
                    <li>Perfect for notices, highlights, or pinned content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">🎨 Tilt Variant</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>Starts with -2 degree tilt for playful appearance</li>
                    <li>Straightens to 0 degrees on hover</li>
                    <li>Subtle scale effect (105%) for enhanced interaction</li>
                    <li>Smooth 300ms transitions for professional feel</li>
                    <li>Great for creative interfaces and featured content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">🎨 Design Philosophy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm sm:text-base">
                    <li>Memphis design principles with bold borders and vibrant colors</li>
                    <li>NeoBrutalism aesthetics with high contrast and geometric shapes</li>
                    <li>Modular component system for building complex interfaces</li>
                    <li>Consistent with Button and Input components</li>
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
                    title="components/memphi/card.tsx"
                    code={`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  [
    // Base styles
    "bg-white border-2 border-black rounded-lg p-6",
    "transition-all duration-300 ease-in-out",
    "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  ],
  {
    variants: {
      variant: {
        default: "",
        pin: "relative",
        tilt: "transform -rotate-2 hover:rotate-0 hover:scale-105",
      },
      shadowColor: {
        default: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        red: "shadow-[4px_4px_0px_0px_oklch(0.7_0.2_27.3)]",
        blue: "shadow-[4px_4px_0px_0px_oklch(0.6_0.2_240)]",
        green: "shadow-[4px_4px_0px_0px_oklch(0.6_0.2_120)]",
        yellow: "shadow-[4px_4px_0px_0px_oklch(0.8_0.2_60)]",
        purple: "shadow-[4px_4px_0px_0px_oklch(0.8_0.2_300)]",
      },
    },
    defaultVariants: {
      variant: "default",
      shadowColor: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  pinColor?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, shadowColor, pinColor = "oklch(0.7 0.2 27.3)", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, shadowColor }), className)}
        {...props}
      >
        {variant === "pin" && (
          <>
            {/* Pin entry point on card */}
            <div className="absolute top-3 left-2 w-3 h-3 rounded-full border border-dashed border-gray-400" />
            
            {/* Push pin SVG */}
            <div className="absolute -top-2 left-3 transform rotate-12">
              <svg width="32" height="32" viewBox="-35.62 -35.62 580.14 580.14" className="drop-shadow-sm">
                {/* Pin components with customizable color */}
                <path d="M505.605,190.556c-13.789,13.789-66.887-16.949-118.599-68.661 c-51.712-51.712-82.45-104.81-68.661-118.599s66.887,16.949,118.599,68.661S519.394,176.768,505.605,190.556" fill={pinColor} stroke="black" strokeWidth="8" />
                {/* Additional pin paths... */}
              </svg>
            </div>
          </>
        )}
        {props.children}
      </div>
    )
  }
)

Card.displayName = "Card"

// Sub-components
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-bold text-black font-sans uppercase", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center pt-4 mt-4 border-t-2 border-black border-dashed", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-black mb-2">2. Update your import paths</h3>
                  <p className="text-black text-sm mb-3">
                    Make sure you have the required dependencies installed:
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