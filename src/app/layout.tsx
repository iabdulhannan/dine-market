import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ReduxProvider from "@/app/store/ReduxProvider";

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
    <html lang="en">
    <ReduxProvider>
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </ReduxProvider>
    </html>
  )
}
