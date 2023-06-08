'use client'
import React from 'react';
import {useAppSelector} from "@/app/hooks/reduxHooks";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import {ProductInCart} from "@/app/assets/types";
import {PrimaryButton} from "@/app/components/PrimaryButton";
import Link from "next/link";
import {AddressElement, CardElement, CardNumberElement} from "@stripe/react-stripe-js";

function OrderSummary() {

  const totalProducts = useAppSelector(state => state.cartReducer.products.length)
  // @ts-ignore
  const totalCost = useAppSelector(state => state.cartReducer.products.reduce((total: number, product: ProductInCart) => total + product.price, 0))

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
        <Link href={'pages/shop/checkout'}
              className={'w-full sm:w-1/2 lg:w-full text-white text-center font-semibold bg-black px-5 py-2 text-sm border-t-2 border-l-2 border-gray-500'}>
          <label>
            Checkout
          </label>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
