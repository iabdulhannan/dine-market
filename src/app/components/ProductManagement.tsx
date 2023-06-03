// 'use client'
//
// import React, {useEffect, useState} from 'react';
// import {Product} from "@/app/assets/types";
// import SizeSelector from "@/app/components/SizeSelector";
// import Quantity from "@/app/components/Quantity";
// import AddToCart from "@/app/components/AddToCart";
//
// function ProductManagement({product}: {product: any}) {
//   const [quantity, setQuantity] = useState(1);
//
//   const [selectedProduct, setSelectedProduct] = useState(product);
//
//   useEffect(()=>{
//
//   }, [quantity])
//
//
//   return (
//     <>
//       <SizeSelector sizes={product.sizes}/>
//       <Quantity quantity={quantity} setQuantity={setQuantity}/>
//       <AddToCart product={selectedProduct}/>
//     </>
//   );
// }
//
// export default ProductManagement;
