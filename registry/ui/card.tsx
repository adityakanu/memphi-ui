import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

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
            {/* Pin entry point on card - dotted circle where needle enters */}
            <div className="absolute top-3 left-2 w-3 h-3 rounded-full border border-dashed border-gray-400" />
            
            {/* Push pin using SVG design */}
            <div className="absolute -top-2 left-3 transform rotate-12">
              <svg 
                width="32" 
                height="32" 
                viewBox="-35.62 -35.62 580.14 580.14" 
                className="drop-shadow-sm"
              >
                {/* Pin head (red part) */}
                <path 
                  d="M505.605,190.556c-13.789,13.789-66.887-16.949-118.599-68.661 c-51.712-51.712-82.45-104.81-68.661-118.599s66.887,16.949,118.599,68.661S519.394,176.768,505.605,190.556" 
                  fill={pinColor}
                  stroke="black"
                  strokeWidth="8"
                />
                <path 
                  d="M387.007,121.894c-51.712-51.712-82.45-104.81-68.661-118.599 c-49.991,49.991-39.23,123.065,12.482,174.777s121.671,65.589,171.652,15.607l-0.786-0.821 C483.625,199.435,434.764,169.651,387.007,121.894" 
                  fill={pinColor}
                  opacity="0.8"
                  stroke="black"
                  strokeWidth="4"
                />
                
                {/* Pin body/shaft */}
                <path 
                  d="M342.08,279.177l58.606-58.606c-24.594-6.727-48.746-21.389-69.853-42.496 c-21.116-21.116-35.257-45.789-41.366-70.991l-59.727,59.719l-48.719,48.719c6.118,25.212,22.581,47.554,43.697,68.661 c21.107,21.116,44.067,36.97,68.661,43.697L342.08,279.177z" 
                  fill={pinColor}
                  stroke="black"
                  strokeWidth="6"
                />
                
                {/* Pin needle */}
                <polygon 
                  points="0,508.9 112.358,346.605 162.295,396.543" 
                  fill="#D9DBE8"
                  stroke="black"
                  strokeWidth="4"
                />
                
                {/* Pin shadow/depth */}
                <path 
                  d="M311.324,389.978c2.348-21.486-1.607-44.226-11.829-68.22l-6.118,6.126 c-24.594-6.735-47.554-22.59-68.661-43.697c-21.116-21.107-37.579-43.458-43.697-68.661l6.241-6.241l-0.274-0.282 c-24.143-10.346-47.016-14.345-68.626-11.979c-40.157,4.378-64.071,45.877-47.634,82.785 c12.509,28.072,35.566,60.734,66.322,91.489c30.746,30.747,63.417,53.813,91.489,66.313 C265.438,454.048,306.937,430.134,311.324,389.978" 
                  fill={pinColor}
                  opacity="0.7"
                  stroke="black"
                  strokeWidth="4"
                />
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

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-4", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold text-black font-sans uppercase", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4 mt-4 border-t-2 border-black border-dashed", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
}
