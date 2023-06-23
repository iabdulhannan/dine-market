import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ReduxProvider from "@/app/store/ReduxProvider";
import {Toaster} from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Dine Market',
  description: 'Hackathon One - Developed by Abdul Hannan',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
        <Header/>
        {children}
        <Footer/>
        <Toaster/>
      </ReduxProvider>
      </body>
      </html>
    </ClerkProvider>
  )
}
