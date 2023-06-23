import Image from 'next/image'
import Hero from "@/app/components/Hero";
import NewsLetter from "@/app/components/NewsLetter";
import {Sora} from "next/font/google";
import Promotions from "@/app/components/Promotions";
import Products from "@/app/components/Products";
import postgres from "postgres";
import {drizzle, PostgresJsDatabase} from "drizzle-orm/postgres-js";
const sora = Sora({subsets: ['latin']})

export default function Home() {
  // @ts-ignore
  const queryClient = postgres(process.env.DATABASE_URL);
  const db: PostgresJsDatabase = drizzle(queryClient);

  return (
    <main className={`${sora.className} container flex min-h-screen flex-col items-center justify-between`}>
      <Hero/>
      <Promotions/>
      <Products/>
      <NewsLetter/>
    </main>
  )
}
