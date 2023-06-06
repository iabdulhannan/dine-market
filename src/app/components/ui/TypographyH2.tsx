import {Inter} from "next/font/google";
import {cn} from "@/app/lib/utils";

const inter = Inter({subsets: ['latin']})
export function TypographyH2({text, className}: { text: string | number; className?: string }) {
  return (
    <h2
      className={cn(`${className} mt-10 text-black scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`, className)}>
      {text}
    </h2>
  )
}
