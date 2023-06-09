'use client'
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/hooks/reduxHooks";
import CartItem from "@/app/components/CartItem";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import Image from "next/image";
import OrderSummary from "@/app/components/OrderSummary";
import {emptyCart} from "@/app/store/slices/cartSlice";

function Page({searchParams}: { searchParams: any }) {

  const [successFullyCheckedOut, setSuccessFullyCheckedOut] = useState(false);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (searchParams.success) {
      dispatch(emptyCart())
      setSuccessFullyCheckedOut(true)
    }
  }, [searchParams]);


  const products = useAppSelector(store => store.cartReducer.products.map(product => ({
    productID: product.productID,
    productSize: product.size
  })))


  return (
    <div className={'container grid grid-cols-12 gap-4'}>
      {
        successFullyCheckedOut ? (
            <div className={'col-span-12 flex flex-col items-center justify-center'}>
              <Image alt={'Empty Cart Image'} src={'/images/success.jpg'} height={500} width={500}/>
              <TypographyH2 text={'Aha! Order booked successfully'}
                            className={'text-gray-500 font-light text-center text-lg sm:text-2xl'}/>
            </div>
          )
          :
          products.length ? (
              <>
                <div className={'col-span-12 md:col-span-9 flex flex-col gap-y-5'}>
                  {products.map((product, index) => (
                    <CartItem key={index} productID={product.productID} productSize={product.productSize}/>
                  ))}
                </div>
                <OrderSummary/>
              </>
            )
            : (
              <div className={'col-span-12 flex flex-col items-center justify-center'}>
                <Image alt={'Empty Cart Image'} src={'/images/empty.jpg'} height={500} width={500}/>
                <TypographyH2 text={'It looks like you haven\'t selected anything yet'}
                              className={'text-gray-500 font-light text-center text-lg sm:text-2xl'}/>
              </div>
            )
      }
    </div>
  );
}

export default Page;
