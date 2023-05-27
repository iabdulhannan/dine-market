import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})
export function TypographyH4({text, className}: { text: string; className?: string }) {
  return (
    <h4 className={`${inter.className} ${className} text-md font-semibold tracking-tight text-black`}>
      {text}
    </h4>
  )
}
