'use client'
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";

function Layout({
                  children,
                }: {
  children: React.ReactNode
}) {
  const methods = useForm({
    defaultValues:{
      productID: '',
      size: 'S',
      quantity: '1',
    }
  })

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
}

export default Layout;
