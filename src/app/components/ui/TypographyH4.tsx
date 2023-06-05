import {Inter} from "next/font/google";
import {cn} from "@/app/lib/utils";

const inter = Inter({subsets: ['latin']})
export function TypographyH4({text, className}: { text: string; className?: string }) {
  return (
    <h4 className={cn(`${inter.className} text-md font-semibold tracking-tight text-black`, className)}>
      {text}
    </h4>
  )
}
