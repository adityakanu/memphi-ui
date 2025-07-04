import { ExternalLink, Github, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-retro-11 border-t-4 border-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/memphi.webp" alt="Memphi UI" width={32} height={32} />
              <span className="text-2xl font-bold text-black font-sans uppercase tracking-wide">
                Memphi UI
              </span>
            </Link>
            <p className="text-black text-sm max-w-md leading-relaxed mb-4">
              A Memphis-inspired React component library that brings bold, playful design to modern web interfaces. 
              Built with TypeScript, Tailwind CSS, and a whole lot of ✨ vibes.
            </p>
            <div className="flex items-center space-x-1 text-black text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-retro-3 fill-current" />
              <span>by</span>
              <Link 
                href="https://adityakanu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold hover:text-retro-4 transition-colors underline underline-offset-2"
              >
                Aditya Kanu
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4 font-sans uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/docs" 
                  className="text-black hover:text-retro-4 transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs/installation" 
                  className="text-black hover:text-retro-4 transition-colors text-sm"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs/components/button" 
                  className="text-black hover:text-retro-4 transition-colors text-sm"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link 
                  href="/examples" 
                  className="text-black hover:text-retro-4 transition-colors text-sm"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4 font-sans uppercase">
              Connect
            </h3>
            <div className="space-y-3">
              <Link 
                href="https://github.com/adityakanu/memphi-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-black hover:text-retro-4 transition-colors text-sm group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="https://adityakanu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-black hover:text-retro-4 transition-colors text-sm group"
              >
                <div className="w-4 h-4 bg-retro-6 border border-black rounded-full"></div>
                <span>Portfolio</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t-2 border-black">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-black text-sm">
                © {new Date().getFullYear()} Memphi UI. All rights reserved.
              </p>
            </div>
            
            {/* Playful decorative elements */}
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-retro-1 border-2 border-black rounded-full transform rotate-12"></div>
              <div className="w-3 h-3 bg-retro-7 border-2 border-black transform -rotate-12"></div>
              <div className="w-5 h-3 bg-retro-9 border-2 border-black transform rotate-6"></div>
              <div className="w-3 h-4 bg-retro-2 border-2 border-black rounded-full transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-retro-8 border-2 border-black rounded-full transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-8 left-20 w-6 h-6 bg-retro-5 border-2 border-black transform -rotate-12 opacity-20"></div>
        <div className="absolute bottom-6 right-16 w-4 h-8 bg-retro-3 border-2 border-black transform rotate-12 opacity-25"></div>
        <div className="absolute bottom-10 right-4 w-6 h-6 bg-retro-10 border-2 border-black rounded-full transform -rotate-45 opacity-30"></div>
      </div>
    </footer>
  );
} 