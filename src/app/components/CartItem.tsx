'use client'
import React from 'react';
import Image from "next/image";
import {dataset, projectId} from "../../../sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import {TypographyH3} from "@/app/components/ui/TypographyH3";
import {TypographyH4} from "@/app/components/ui/TypographyH4";
import {Trash2} from "lucide-react";
import QuantityInCartItem from "@/app/components/QuantityInCartItem";
import {useAppDispatch, useAppSelector} from "@/app/hooks/reduxHooks";
import {ProductInCart} from "@/app/assets/types";
import {removeFromCart} from "@/app/store/slices/cartSlice";

function CartItem({productID, productSize}: { productID: any, productSize: string }) {

  const dispatch = useAppDispatch();
  const product: ProductInCart | undefined = useAppSelector(state => state.cartReducer.products.find(p => p.productID === productID && p.size === productSize))
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }


  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)
  console.log(product?.size)
  return (
    product && (
      <div className={'p-5 grid grid-cols-12 gap-3 place-items-center border border-gray-100 rounded-lg'}>
        <div className={'col-span-12 sm:col-span-3 rounded-lg'}>
          <Image src={urlFor(product.firstImage).toString()} alt={'Product Image'} width={200} height={200}
                 className={'rounded-lg'}/>
        </div>
        <div className={'col-span-9 sm:col-span-6 flex flex-col gap-y-2 justify-start w-full'}>
          <TypographyH3 text={product.title} className={'font-light text-gray-700 text-xl sm:text-2xl md:text-xl lg:text-2xl'}/>
          <TypographyH4 text={product.subTitle} className={'font-medium text-lg sm:text-xl md:text-lg lg:text-xl'}/>
          <div className={'flex'}>
            <TypographyH4 text={'Size: '} className={'font-medium mr-2'}/>
            <TypographyH4 text={product.size} className={'font-medium'}/>
          </div>
          <TypographyH4 text={'$' + product.price} className={'font-semibold text-xl'}/>
        </div>
        <div className={'col-span-3 flex flex-col justify-between w-full h-full'}>
          <button onClick={() => dispatch(removeFromCart({productID: product.productID, size: product.size}))} className={'col-span-3 flex flex-col items-end'}>
            <Trash2 color={'#C94444'}/>
          </button>
          <QuantityInCartItem product={product}/>
        </div>
      </div>
    )
  );
}

// @ts-ignore
export default React.memo(CartItem);
