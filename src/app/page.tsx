import Image from 'next/image'
import Hero from "@/app/components/Hero";
import NewsLetter from "@/app/components/NewsLetter";
import {Sora} from "next/font/google";
import Promotions from "@/app/components/Promotions";
import Products from "@/app/components/Products";
const sora = Sora({subsets: ['latin']})

export default function Home() {
  return (
    <main className={`${sora.className} container flex min-h-screen flex-col items-center justify-between`}>
      <Hero/>
      <Promotions/>
      <Products/>
      <NewsLetter/>
    </main>
  )
}
