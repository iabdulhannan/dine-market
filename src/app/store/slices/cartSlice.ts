'use client'

import {createSlice} from '@reduxjs/toolkit';
// @ts-ignore
import {ProductInCart} from "@/app/assets/types";

const initialState: {products: Array<ProductInCart> | []} = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("action.payload", action.payload)
      // console.log("state.products", state.products)
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.productID !== action.payload;
      });
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
