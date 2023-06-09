'use client'
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Search, ShoppingCart} from "lucide-react";
import {headerOptions} from "@/app/assets/data";
import {TypographyH4} from "@/app/components/ui/TypographyH4";
import Link from "next/link";
import {RiMenu3Fill} from 'react-icons/ri';
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import Image from "next/image";
import {Sora} from "next/font/google";
import {ShoppingCartButton} from "@/app/components/ShoppingCartButton";

const sora = Sora({subsets: ['latin']})

function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <header className={`${sora.className} container h-20`}>
        <div
          className={'grid grid-cols-12 place-items-center justify-items-end sm:flex py-3 sm:justify-between sm:items-center'}>
          <Link href={'/'} className={'col-span-6'}>
            <Image src={'/images/DineMarketLogo.svg'} alt={'Dine Market Logo'} height={200} width={200}/>
          </Link>
          {/*options hidden on mobile*/}
          <div className={'flex justify-evenly items-center gap-x-16'}>
            <div className={'hidden lg:flex lg:gap-x-9'}>
              {
                headerOptions.map((option, index) => {
                  return (
                    <Link key={index} href={option.linkTo}>
                      <TypographyH4 className={'font-semibold whitespace-nowrap'} text={option.name}/>
                    </Link>
                  )
                })
              }
            </div>
            {/*  Search Bar on mobile*/}
            <SearchBar/>
          </div>
          {/*Shopping Cart*/}
          <ShoppingCartButton setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu}/>
        </div>
      </header>
      {
        <div
          className={`absolute bg-white lg:hidden flex flex-col gap-y-8 items-center justify-center transition-all w-full overflow-hidden duration-500 ${showSideMenu ? 'h-screen' : 'h-0'}`}>
          {
            headerOptions.map((option, index) => {
              return (
                <Link key={index} href={option.linkTo} onClick={() => setShowSideMenu(false)}>
                  <TypographyH2 className={'font-semibold whitespace-nowrap hover:underline focus:underline'}
                                text={option.name}/>
                </Link>
              )
            })
          }
        </div>
      }
    </>
  );
}


const SearchBar = () => {
  return (
    <div className={'hidden px-2 py-1/2 min-w-[45%] lg:flex items-center rounded-md border border-gray-300 '}>
      <div className={'text-gray-500 mr-2'}>
        <Search size={20}/>
      </div>
      <input width={100} className={'text-sm flex-grow focus:outline-0'} placeholder={'What are you looking for'}
             type={"text"}/>
    </div>
  )
}

export default Header;
