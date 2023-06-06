'use client'
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ShoppingCart} from "lucide-react";
import {RiMenu3Fill} from "react-icons/ri";
import {useAppSelector} from "@/app/hooks/reduxHooks";
import Link from "next/link";

export const ShoppingCartButton = ({showSideMenu, setShowSideMenu}: {
  showSideMenu: boolean,
  setShowSideMenu: Dispatch<SetStateAction<boolean>>
}) => {

  const numberOfItemsInCart = useAppSelector(store => store.cartReducer.products.length)
  const [items, setItems] = useState(numberOfItemsInCart);
  useEffect(() => {
      setItems(numberOfItemsInCart)
  }, [numberOfItemsInCart]);


  return (
    <div className={'col-span-5 flex justify-end gap-x-5 lg:gap-0'}>
      <div className={'relative flex justify-between items-center hover:bg-gray-200 rounded-full p-2 w-[55px] h-[55px]'}>
      <span
        className={'bg-red-600 text-white absolute rounded-full text-xxs w-4 h-4 flex justify-center items-center right-2 top-2'}>{items}</span>
        <Link href={'pages/shop/cart'} >
          <ShoppingCart color={'#000000'} size={30}/>
        </Link>
      </div>
      <button onClick={() => setShowSideMenu(!showSideMenu)} className={'hover:bg-gray-200 rounded-full p-2 lg:hidden'}>
        <RiMenu3Fill color={'#000000'} size={30}/>
      </button>
    </div>
  )
}
