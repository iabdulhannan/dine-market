'use client'
import React, {useEffect, useState} from 'react';
import {useAppSelector} from "@/app/hooks/reduxHooks";
import useSWR from "swr";
import CartItem from "@/app/components/CartItem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Page() {

  const selectedProducts = useAppSelector(store => store.cartReducer.products)
  // const productIDs = selectedProducts.map(product => product?.productID)

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<any>>([]);
  // console.log("productIDs: ", productIDs)

  useEffect(() => {
    getData()
  }, [selectedProducts]);

  const getData = () => {
    setProducts([])
    selectedProducts.map(async (product: any) => {
      console.log('calling')
      const data = await fetch(`https://u4m48ujb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20_id%20%3D%3D%20'${product.productID}'%5D%7B%22firstImage%22%3A%20images%5B0%5D.asset._ref%2Ctitle%2C%20subTitle%2C%20_id%2C%7D%0A%0A%0A%0A%0A%0A`).then((data) => data.json())
      const newProduct = {
        ...data.result[0],
        size: product.size,
        price: product.price,
        quantity: product.quantity
      }

      setProducts((prev) => [...prev, newProduct])
      // console.log('DATA: ', data)
    })
  }

  return (
    <div className={'container grid grid-cols-12 gap-4'}>
      <div className={'col-span-8 flex flex-col gap-y-5'}>
        {products.map((product, index) => (
          <CartItem key={index} product={product}/>
        ))}
      </div>
      <div className={'col-span-4 flex flex-col gap-y-3 border border-black rounded-lg'}>
        <h1>Order Summary</h1>
      </div>
    </div>
  );
}

export default Page;
