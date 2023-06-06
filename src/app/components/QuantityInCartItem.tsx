import React, {useCallback, useState} from 'react';
import {useAppDispatch} from "@/app/hooks/reduxHooks";
import {decrementQuantity, incrementQuantity} from "@/app/store/slices/cartSlice";

function QuantityInCartItem({product}: { product: any }) {

  console.log('Product:', product)
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const dispatch = useAppDispatch()

  const decrement = useCallback(
    () => {
      dispatch(decrementQuantity({productID: product.productID, size: product.size}))
      setQuantity((prev) => prev - 1)
    },
    [product],
  );
  const increment = useCallback(
    () => {
      dispatch(incrementQuantity({productID: product.productID, size: product.size}))
      setQuantity((prev) => prev + 1)
    },
    [product],
  );


  return (
    <div className={'flex flex-row gap-x-3 justify-end'}>

      <div className={'flex flex-row items-center gap-x-2'}>
        <button disabled={quantity === 1} onClick={decrement}
                className={`${quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} border-2 border-black h-5 sm:h-7 w-5 sm:w-7 rounded-full text-lg sm:text-xl flex items-center justify-center`}>
          -
        </button>
        <label className={'text-md sm:text-xl w-3 sm:w-6 text-center'}>
          {quantity}
        </label>
        <button onClick={increment}
                className={'cursor-pointer border-2 border-black h-5 sm:h-7 w-5 sm:w-7 rounded-full text-lg sm:text-xl flex items-center justify-center'}>
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityInCartItem;
