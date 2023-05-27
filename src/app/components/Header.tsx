'use client'
import React, {Dispatch, SetStateAction, useState} from 'react';
import {Search, ShoppingCart} from "lucide-react";
import {headerOptions} from "@/app/assets/data";
import {TypographyH4} from "@/app/components/ui/TypographyH4";
import Link from "next/link";
import {RiMenu3Fill} from 'react-icons/ri';
import {TypographyH3} from "@/app/components/ui/TypographyH3";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import Image from "next/image";

function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <header className={'container'}>
        <div className={'flex py-3 justify-between items-center'}>
          <Image src={'/images/DineMarketLogo.svg'} alt={'Dine Market Logo'} height={200} width={200}/>
          {/*Shopping Cart*/}
          <div className={'flex justify-evenly items-center gap-x-16'}>
            {/*options*/}
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
            {/*  Search Bar*/}
            <SearchBar/>
          </div>
          <ShoppingCartButton setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} numberOfItemsInCart={0}/>
        </div>
      </header>
      {
        <div
          className={`lg:hidden flex flex-col gap-y-8 items-center justify-center transition-all w-full overflow-hidden duration-500 ${showSideMenu ? 'h-screen' : 'h-0'}`}>
          {
            headerOptions.map((option, index) => {
              return (
                <Link key={index} href={option.linkTo}>
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


const ShoppingCartButton = ({numberOfItemsInCart, showSideMenu, setShowSideMenu}: {
  numberOfItemsInCart: number,
  showSideMenu: boolean,
  setShowSideMenu: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <>
      <div className={'hidden relative lg:flex justify-between items-center hover:bg-gray-200 rounded-full p-2'}>
      <span
        className={'bg-red-600 text-white absolute rounded-full text-xxs w-5 h-5 flex justify-center items-center right-0 top-1'}>{numberOfItemsInCart}</span>
        <button>
          <ShoppingCart color={'#000000'} size={35}/>
        </button>
      </div>
      <button onClick={() => setShowSideMenu(!showSideMenu)} className={'hover:bg-gray-200 rounded-full p-2 lg:hidden'}>
        <RiMenu3Fill color={'#000000'} size={35}/>
      </button>
    </>
  )
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
