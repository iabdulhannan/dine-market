"use client"
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {cn} from "@/app/lib/utils";
import {Inter} from "next/font/google";
const inter = Inter({subsets: ['latin']})

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      `${inter.className} text-black text-sm font-medium leading-none`,
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
