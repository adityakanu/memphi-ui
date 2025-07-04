"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r-4 border-black p-6 h-screen sticky top-16 overflow-y-auto">
      <div className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-bold text-black mb-3 font-sans uppercase">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                      pathname === item.href
                        ? "bg-retro-1 text-black border-2 border-black font-bold"
                        : "text-black hover:bg-retro-8 hover:text-black"
                    )}
                  >
                    {item.title}
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-retro-2 text-black border border-black rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 