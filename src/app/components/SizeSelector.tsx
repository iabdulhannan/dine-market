'use client'
import React, {useEffect, useState} from 'react';
import {useFormContext} from "react-hook-form";

function SizeSelector({sizes}: { sizes: string[] }) {

  const {setValue, getValues, watch} = useFormContext()

  const [selectedSize, setSelectedSize] = useState('S');
  // for causing re-renders on size change
  watch('size')

  return (
    <div>
      <label className={'text-md uppercase font-semibold'}>Select Size</label>
      <div className={'flex flex-row justify-start items-center gap-x-10 mt-4'}>
        {
          sizes.map((size: string, index: number) => {
            return (
              <button key={index}
                      onClick={() => setValue('size', size)}
                      className={`text-lg h-7 w-7 font-semibold text-gray-400 border-2
                       ${getValues('size') === size ? 'border-black' : 'border-white'}`}>
                {size}
              </button>
            )
          })
        }
      </div>
    </div>
  );
}

export default SizeSelector;
