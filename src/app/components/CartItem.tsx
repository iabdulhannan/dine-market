'use client'
import React from 'react';
import Image from "next/image";
import {dataset, projectId} from "../../../sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import {TypographyH3} from "@/app/components/ui/TypographyH3";
import {TypographyH4} from "@/app/components/ui/TypographyH4";
import {Trash2} from "lucide-react";
import QuantityInCartItem from "@/app/components/QuantityInCartItem";

function CartItem({product}: { product: any }) {
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }

  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)

  return (
    <div className={'p-5 border border-black grid grid-cols-12 gap-3'}>
      <div className={'col-span-3 rounded-lg'}>
        <Image src={urlFor(product.firstImage).toString()} alt={'Product Image'} width={180} height={180}
               className={'rounded-lg'}/>
      </div>
      <div className={'col-span-6 flex flex-col gap-y-2 justify-center'}>
        <TypographyH3 text={product.title} className={'font-light text-gray-700 text-3xl'}/>
        <TypographyH4 text={product.subTitle} className={'font-medium text-xl'}/>
        <div className={'flex'}>
          <TypographyH4 text={'Size: '} className={'font-medium mr-2'}/>
          <TypographyH4 text={product.size} className={'font-medium'}/>
        </div>
        <TypographyH4 text={'$' + product.price} className={'font-semibold text-xl'}/>
      </div>
      <div className={'col-span-3 flex flex-col justify-between border border-black w-full'}>
        <button onClick={() => console.log('deleting')} className={'col-span-3 flex flex-col items-end'}>
          <Trash2 color={'#C94444'}/>
        </button>
        <QuantityInCartItem product={product}/>
      </div>

    </div>
  );
}

export default CartItem;
