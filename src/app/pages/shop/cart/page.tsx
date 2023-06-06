'use client'
import React from 'react';
import {useAppSelector} from "@/app/hooks/reduxHooks";
import CartItem from "@/app/components/CartItem";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import Image from "next/image";
import OrderSummary from "@/app/components/OrderSummary";


function Page() {

  const productIDs = useAppSelector(store => store.cartReducer.products.map(product => product.productID))

  return (
    <div className={'container grid grid-cols-12 gap-4'}>
      {
        productIDs.length ? (
            <>
              <div className={'col-span-12 md:col-span-9 flex flex-col gap-y-5'}>
                {productIDs.map((productID, index) => (
                  <CartItem key={index} productID={productID}/>
                ))}
              </div>
              <OrderSummary/>
            </>
          )
          : (
            <div className={'col-span-12 flex flex-col items-center justify-center'}>
              <Image alt={'Empty Cart Image'} src={'/images/empty.jpg'} height={500} width={500}/>
              <TypographyH2 text={'It looks like you haven\'t selected anything yet'} className={'text-gray-500 font-light text-center text-lg sm:text-2xl'}/>
            </div>
          )
      }
    </div>
  );
}

export default Page;
