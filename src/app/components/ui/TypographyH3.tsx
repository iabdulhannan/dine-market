import {Inter} from "next/font/google";
import {cn} from "@/app/lib/utils";

const inter = Inter({subsets: ['latin']})
export function TypographyH3({text, className}: { text: string; className?: string }) {

  return (
    <h3 className={cn(`${inter.className} scroll-m-20 text-2xl font-semibold tracking-tight`, className)}>
      {text}
    </h3>
  )
}
