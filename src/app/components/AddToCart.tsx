'use client'
import React, {useEffect} from 'react';
import {PrimaryButton} from "@/app/components/PrimaryButton";
import {useAppDispatch, useAppSelector} from "@/app/hooks/reduxHooks";
import {addToCart} from "@/app/store/slices/cartSlice";
import {Product, ProductInCart} from "@/app/assets/types";
import {useFormContext} from "react-hook-form";
import toast from "react-hot-toast";

function AddToCart({product}: { product: Product }) {
  const dispatch = useAppDispatch();
  const {setValue, handleSubmit} = useFormContext()
  const selectedProducts = useAppSelector(store => store.cartReducer.products)

  useEffect(() => {
    setValue('productID', product._id)
    setValue('firstImage', product.images[0])
    setValue('title', product.title)
    setValue('subTitle', product.subTitle)
    setValue('stripePriceAPIID', product.stripePriceAPIID)
  }, [])

  const submit = (values: any) => {
    const selectedProduct: ProductInCart = {
      ...values,
      price: parseInt(product.price) * parseInt(values.quantity),
      originalPrice: parseInt(product.price),
      size: values.size,
      quantity: values.quantity,
    }
    dispatch(addToCart(selectedProduct))
    toast.success('Added to Cart')
  }

  return (
    <div className={'flex justify-start items-center gap-x-3'}>
      <PrimaryButton title={'Add to Cart'} onClick={handleSubmit(submit)}/>
      <PrimaryButton title={'Add '} onClick={() => console.log(selectedProducts)}/>
      {/*<label className={'text-xl uppercase font-semibold'}>${product.price}</label>*/}
    </div>
  );
}

export default AddToCart;
