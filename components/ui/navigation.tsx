"use client";

import { Button } from "@/components/memphi/button";
import { Github, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/memphi.webp" alt="Memphi UI" width={32} height={32} />
            <span className="text-2xl font-bold text-black font-sans uppercase tracking-wide">
              Memphi UI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/docs" 
              className="text-black hover:text-retro-4 font-medium transition-colors"
            >
              Documentation
            </Link>
            <Link 
              href="/docs/components/button" 
              className="text-black hover:text-retro-4 font-medium transition-colors"
            >
              Components
            </Link>
            <Link 
              href="/examples" 
              className="text-black hover:text-retro-4 font-medium transition-colors"
            >
              Examples
            </Link>
            <Link 
              href="https://github.com/adityakanu/memphi-ui" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/docs" 
                className="text-black hover:text-retro-4 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link 
                href="/docs/components/button" 
                className="text-black hover:text-retro-4 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Components
              </Link>
              <Link 
                href="/examples" 
                className="text-black hover:text-retro-4 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Examples
              </Link>
              <Link 
                href="https://github.com/adityakanu/memphi-ui" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="w-fit">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 