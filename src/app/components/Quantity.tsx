'use client'
import React, {useEffect, useState} from 'react';
import {useFormContext} from "react-hook-form";

function Quantity() {

  const [quantity, setQuantity] = useState(1);
  const {setValue} = useFormContext()

  // for causing re-renders on size change
  // watch('size')
  useEffect(()=>{
    setValue('quantity', quantity)
  }, [quantity])

  return (
    <div className={'flex flex-row gap-x-3'}>
      <label className={'text-md font-semibold'}>
        Quantity:
      </label>
      <div className={'flex flex-row gap-x-2'}>
        <button disabled={quantity === 1}  onClick={() => setQuantity((prev) => {
          if (prev !== 1) {
            return prev - 1;
          }
          return prev
        })}
             className={`${quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} border-2 border-black h-7 w-7 rounded-full text-xl flex items-center justify-center`}>
          -
        </button>
        <label className={'text-xl w-6 text-center'}>
          {quantity}
        </label>
        <button onClick={() => setQuantity((prev) => prev + 1)}
             className={'cursor-pointer border-2 border-black h-7 w-7 rounded-full text-xl flex items-center justify-center'}>
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
