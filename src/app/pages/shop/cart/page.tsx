'use client'
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/hooks/reduxHooks";
import CartItem from "@/app/components/CartItem";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import Image from "next/image";
import OrderSummary from "@/app/components/OrderSummary";
import {emptyCart} from "@/app/store/slices/cartSlice";
import {ProductInCart} from "@/app/assets/types";
import {useUser} from "@clerk/nextjs";
import toast from "react-hot-toast";
import {TailSpin} from "react-loader-spinner";

function Page({searchParams}: { searchParams: any }) {

  const [successFullyCheckedOut, setSuccessFullyCheckedOut] = useState(false);
  const dispatch = useAppDispatch()
  const totalCost = useAppSelector(state => state.cartReducer.products.reduce((total: number, product: ProductInCart) => total + product.price, 0))
  const productsToCheckout = useAppSelector(store => {
    const products = store.cartReducer.products;
    const map = new Map();

    products.forEach(product => {
      const {stripePriceAPIID, quantity} = product;
      if (map.has(stripePriceAPIID)) {
        map.set(stripePriceAPIID, map.get(stripePriceAPIID) + quantity);
      } else {
        map.set(stripePriceAPIID, quantity);
      }
    });

    const result = Array.from(map, ([price, quantity]) => ({price, quantity}));
    return result;
  });
  const {isLoaded, isSignedIn, user} = useUser()
  const [processingTransaction, setProcessingTransaction] = useState(false);


  useEffect(() => {
    if (searchParams.success) {
      console.log('successFullyCheckedOut', successFullyCheckedOut)
      if (isLoaded && productsToCheckout.length) {
        (async () => {
          console.log('Insertng Records')
          const body = {
            productsToCheckout: productsToCheckout,
            userId: user?.id,
            totalAmount: totalCost
          }
          try {
            let response = await fetch('/api/createOrder', {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(body)
            })
            dispatch(emptyCart())
            setSuccessFullyCheckedOut(true)
            setProcessingTransaction(false)
          } catch (e) {
            toast.error('Could not checkout', {position: 'top-center'})
          }
        })()
      }
      else if(productsToCheckout.length) {
        setProcessingTransaction(true)
      }
      else {
        setSuccessFullyCheckedOut(true)
      }
    }
  }, [searchParams, isLoaded]);


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
          products.length && !processingTransaction ? (
              <>
                <div className={'col-span-12 md:col-span-9 flex flex-col gap-y-5'}>
                  {products.map((product, index) => (
                    <CartItem key={index} productID={product.productID} productSize={product.productSize}/>
                  ))}
                </div>
                <OrderSummary/>
              </>
            ) :
            processingTransaction ? (
              <div className={'flex flex-col justify-center items-center gap-y-4 col-span-12 h-full mt-[-20px] min-h-screen'}>
                <TypographyH2 text={'Processing transaction'}
                              className={'text-gray-500 font-light text-center text-lg sm:text-2xl'}/>
                <TailSpin
                  height="35"
                  width="35"
                  color="#000000"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
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
