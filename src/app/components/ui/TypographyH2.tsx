import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})
export function TypographyH2({text, className}: { text: string; className?: string }) {
  return (
    <h2
      className={`${inter.className} ${className} mt-10 text-black scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`}>
      {text}
    </h2>
  )
}
