"use client";

import { Button } from "@/components/memphi/button";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  title: string;
  language?: string;
  maxLines?: number;
}

export function CodeBlock({ code, title, maxLines = 15 }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const lines = code.split('\n');
  const shouldTruncate = lines.length > maxLines;
  const displayedCode = shouldTruncate && !isExpanded 
    ? lines.slice(0, maxLines).join('\n') + '\n// ... (click expand to see more)'
    : code;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-green-400 p-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold text-retro-1">{title}</span>
        <div className="flex gap-2">
          {shouldTruncate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:text-retro-1 transition-colors h-6 px-2"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3 h-3 mr-1" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3 mr-1" />
                  Expand
                </>
              )}
            </Button>
          )}
          <button
            onClick={copyToClipboard}
            className="text-white hover:text-retro-1 transition-colors p-1"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <pre className="text-sm overflow-x-auto">
        <code>{displayedCode}</code>
      </pre>
      {shouldTruncate && !isExpanded && (
        <div className="mt-2 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="text-retro-1 hover:text-white transition-colors"
          >
            Show {lines.length - maxLines} more lines
          </Button>
        </div>
      )}
    </div>
  );
} 