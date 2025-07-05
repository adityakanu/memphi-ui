import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const inputVariants = cva(
  [
    // Base styles
    "flex h-10 w-full rounded-md border-2 border-black bg-white px-3 py-2",
    "text-sm text-black placeholder:text-gray-500",
    "transition-all duration-200 ease-in-out",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    // Focus styles with dotted border
    "focus:outline-none focus:border-dashed focus:border-2",
    // Invalid styles
    "aria-invalid:border-red-500"
  ],
  {
    variants: {
      variant: {
        default: "border-black",
        destructive: "border-red-500",
        success: "border-green-500",
        warning: "border-yellow-500",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  shadowColor?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, shadowColor, style, ...props }, ref) => {
    const hasShadow = Boolean(shadowColor)
    
    const shadowStyle = hasShadow
      ? {
          boxShadow: `4px 4px 0px 0px ${shadowColor}`,
          ...style,
        }
      : style

    const shadowClasses = hasShadow
      ? [
          // Shadow container positioning
          "relative",
          // Focus state with shadow - border becomes dotted but shadow border stays solid
          "focus:translate-x-[2px] focus:translate-y-[2px]",
          // Add pseudo-element for the shadow that stays solid
          "before:absolute before:inset-0 before:rounded-md before:border-2 before:border-black before:bg-transparent",
          "before:translate-x-[4px] before:translate-y-[4px] before:-z-10",
          "before:transition-all before:duration-200",
          "focus:before:translate-x-[2px] focus:before:translate-y-[2px]",
        ]
      : []

    return (
      <div className={cn(hasShadow && "relative inline-block")}>
        <input
          className={cn(
            inputVariants({ variant, size }),
            ...shadowClasses,
            className
          )}
          style={shadowStyle}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
