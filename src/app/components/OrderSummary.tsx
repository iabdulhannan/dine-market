'use client'
import React, {useEffect, useState} from 'react';
import {useAppSelector} from "@/app/hooks/reduxHooks";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import {ProductInCart} from "@/app/assets/types";
import toast from "react-hot-toast";
import Link from "next/link";
import {currentUser, SignOutButton, useUser} from "@clerk/nextjs";

function OrderSummary() {

  const totalProducts = useAppSelector(state => state.cartReducer.products.length)
  // @ts-ignore
  const totalCost = useAppSelector(state => state.cartReducer.products.reduce((total: number, product: ProductInCart) => total + product.price, 0))

  const {isLoaded, isSignedIn, user} = useUser()
  // const productsToCheckout = useAppSelector(store => store.cartReducer.products.map(product => ({
  //   price: product.stripePriceAPIID,
  //   quantity: product.quantity
  // })))

  // const isUserLoggedIn = useAppSelector(store => store.userReducer.user.isLoggedIn)
  // const isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    // (async () => {
    //   const user = await currentUser();
    console.log("User:", user, isLoaded, isSignedIn)
    // })()

  }, [isLoaded]);

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


  // const data = [
  //   {
  //     "price": "price_1NGIkFFiu1ZkPKXjKV6lxRZH",
  //     "quantity": "2"
  //     // "adjustable_quantity":{
  //     // "enabled": true
  //     // }
  //   },
  //   {
  //     "price": "price_1NGIj6Fiu1ZkPKXjMDKh90Pe",
  //     "quantity": "1"
  //     // "adjustable_quantity":{
  //     //     "enabled": true
  //     // }
  //   }
  // ]

  const [checkoutURL, setCheckoutURL] = useState('');

  const proceedToCheckout = async () => {
    toast.loading('Checking out', {position: 'top-center'})
    const body = {
      productsToCheckout: productsToCheckout,
      userId: user?.id
    }
    let response = await fetch('/api/checkout', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(body)
    })
    const url = (await response.json()).url;
    setCheckoutURL(url)
  }

  useEffect(() => {
    if (checkoutURL) {
      window.location.href = checkoutURL;
    }
  }, [checkoutURL]);


  return (
    <div className={'col-span-12 md:col-span-3 flex justify-center'}>
      <div className={'flex flex-col gap-y-3 p-5 rounded-lg bg-gray-50 items-center w-full sm:w-1/2 lg:w-full'}>
        <TypographyH2 text={'Order Summary'} className={'text-lg lg:text-xl text-center'}/>
        <div className={'flex flex-row items-center justify-between gap-x-3 w-full'}>
          <h2 className={'text-md lg:text-lg text-center'}>
            Product/s
          </h2>
          <h2 className={'text-md lg:text-lg text-center'}>
            {totalProducts}
          </h2>
        </div>
        <div className={'flex flex-row items-center justify-between gap-x-3 w-full'}>
          <h2 className={'text-md lg:text-lg text-center'}>
            Cost
          </h2>
          <h2 className={'text-md lg:text-lg text-center'}>
            ${totalCost}
          </h2>
        </div>
        {
          isSignedIn ?
            (
              <>
                <button onClick={proceedToCheckout}
                        className={'w-full sm:w-1/2 lg:w-full text-white text-center font-semibold bg-black px-5 py-2 text-sm border-t-2 border-l-2 border-gray-500'}>
                  <label>
                    Checkout
                  </label>
                </button>
                <SignOutButton signOutCallback={() => {
                  toast.success('Signed Out', {position: 'top-center'})
                }}/>
              </>
            )
            : (
              <Link href={'/pages/auth/signin'}
                    className={'w-full sm:w-1/2 lg:w-full text-white text-center font-semibold bg-black px-5 py-2 text-sm border-t-2 border-l-2 border-gray-500'}>
                Signin
              </Link>
            )
        }
        {/*<div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default OrderSummary;
