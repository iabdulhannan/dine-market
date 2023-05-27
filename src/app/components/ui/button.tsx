import * as React from "react"
import {VariantProps, cva} from "class-variance-authority"
import {cn} from "@/app/lib/utils"
import {Inter} from "next/font/google";
import {ColorRing} from "react-loader-spinner";

const inter = Inter({subsets: ['latin']})
const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          `${inter.className} bg-gray-300 text-white hover:bg-slate-700 dark:bg-gray-450 cursor-pointer  `,
        destructive:
          `${inter.className} bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600 cursor-pointer`,
        outline:
          `${inter.className} bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 cursor-pointer`,
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data.ts-[state=open]:bg-transparent dark:data.ts-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        loading: "bg-gray-100 cursor-not-allowed",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isSubmitting?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children,isSubmitting, className, variant, size, ...props}, ref) => {
    return (
      <button
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      >
        {!isSubmitting ? children : (
          <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#D3102D', '#000000', '#D3102D', '#000000', '#D3102D']}
          />
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export {Button, buttonVariants}
