'use client'
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";

function Layout({
                  children,
                }: {
  children: React.ReactNode
}) {
  const methods = useForm({
    defaultValues: {
      firstImage: '',
      title: '',
      subTitle: '',
      price: '',
      productID: '',
      size: 'S',
      quantity: '1',
      stripPriceAPIID: ''
    }
  })

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
}

export default Layout;
