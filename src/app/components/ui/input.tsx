import * as React from "react"
import {cn} from "@/app/lib/utils";
import {Inter} from "next/font/google";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const inter = Inter({subsets: ['latin']})

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, error, ...props}, ref) => {
    return (
      <input
        className={cn(
          `${inter.className} text-black flex h-10 w-full rounded-md border ${error ? 'border-2 border-red-600' : 'border-slate-300'} bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50 `,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export {Input}
