import React from 'react';
import {Sora} from "next/font/google";
import Image from "next/image";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import {FooterLinks} from "@/app/assets/data";

const sora = Sora({subsets: ['latin']})

function Footer() {
  return (
    <footer className={`${sora.className} bg-white container w-full`}>
      <div className={'flex flex-col md:flex-row gap-y-3 w-full'}>
        <div className={'max-w-full md:max-w-[30%] flex flex-col gap-y-3 justify-center items-center'}>
          <Image src={'/images/DineMarketLogo.svg'} alt={'Dine Market Logo'} width={200} height={200}/>
          <label className={'text-gray-500 text-sm text-center'}>
            Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
          </label>
          {/*Social Icons*/}
          <div className={'flex flex-row items-center gap-x-5'}>
            <Link href={'#'} className={'bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center'}>
              <FaFacebookF color={'#000000'} size={20}/>
            </Link>
            <Link href={'#'} className={'bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center'}>
              <FaTwitter color={'#000000'} size={20}/>
            </Link>
            <Link href={'#'} className={'bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center'}>
              <FaLinkedinIn color={'#000000'} size={20}/>
            </Link>
          </div>
        </div>
        {/*  Sections*/}
        <div className={'flex flex-col items-center sm:flex-row justify-around flex-around w-full'}>
          {
            FooterLinks.map((section, index) => {
              return (
                <section key={index} className={'mt-1 w-full flex-col items-center h-full'}>
                  <h1 className={'font-bold text-gray-500 text-lg text-center'}>{section.category}</h1>
                  <div className={'flex flex-col items-center gap-y-2'}>

                    {
                      section.links.map((link, index) => {
                        return (
                          <Link key={index} href={link.href} className={'text-gray-500'}>{link.title}</Link>
                        )
                      })
                    }
                  </div>
                </section>

              )
            })
          }
        </div>
      </div>
      <div className={'border-t border-black flex flex-wrap justify-between gap-3 py-4 px-8 mt-14'}
           style={{marginLeft: -32, marginRight: -32}}>
        <label className={'text-gray-500'}>Copyright &copy; 2023 Dine Market</label>
        <label className={'text-gray-500'}>Designed by <span
          className={'font-semibold text-black'}>ZERO Designs</span></label>
        <label className={'text-gray-500'}>Developed by <span
          className={'font-semibold text-black'}>Abdul Hannan</span></label>
      </div>
    </footer>
  );
}

export default Footer;
