import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils";

type ButtonShape = 'oval' | 'rectangle'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-sans font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-black font-bold uppercase tracking-wide transform transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "bg-destructive text-white",
        outline: "bg-white text-black border-2 border-black",
        secondary: "bg-secondary text-black",
        ghost: "bg-transparent border-transparent text-black hover:bg-accent hover:border-black",
        link: "text-black underline-offset-4 hover:underline border-transparent shadow-none hover:shadow-none active:translate-x-0 active:translate-y-0",
      },
      shape: {
        oval: "rounded-3xl",
        rectangle: "rounded-md",
      },
      hasShadow: {
        true: "shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        false: ""
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    compoundVariants: [
      {
        variant: ["default", "destructive", "outline", "secondary"],
        hasShadow: true,
        className: "shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] hover:-translate-x-0.5 hover:-translate-y-0.5"
      },
    ],
    defaultVariants: {
      variant: "default",
      shape: "oval",
      hasShadow: true,
      size: "default",
    },
  }
);

interface ButtonProps extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  shape?: ButtonShape;
  shadowColor?: string;
}

function Button({
  className,
  variant,
  shape = 'oval',
  size,
  asChild = false,
  shadowColor = 'rgba(0,0,0,1)',
  style,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const hasShadow = variant !== 'ghost' && variant !== 'link';

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, shape, size, hasShadow, className }),
        {
          // Only apply shadow color if hasShadow is true
          'shadow-[--shadow-color]': hasShadow,
        }
      )}
      style={{
        ...style,
        '--shadow-color': shadowColor,
      } as React.CSSProperties}
      {...props}
    />
  )
}

export { Button, buttonVariants };

