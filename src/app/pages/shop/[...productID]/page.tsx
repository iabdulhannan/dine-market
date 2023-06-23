import React from 'react';
import {Sora} from "next/font/google";
import Overview from "@/app/components/Overview";
import ImagesBox from "@/app/components/ImagesBox";
import Quantity from "@/app/components/Quantity";
import SizeSelector from "@/app/components/SizeSelector";
import AddToCart from "@/app/components/AddToCart";

const sora = Sora({subsets: ['latin']})
// export const dynamic = 'force-dynamic'
// export async function generateStaticParams() {
//   const productIDs = await fetch(`https://u4m48ujb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D%7B_id%7D%0A`).then((res) =>
//     res.json(),
//   );
//   return productIDs.result.map((product: any) => ({
//   productID: [`${product._id}`]
//   }));
// }
async function getProduct(productID: string) {
  const res = await fetch(`https://u4m48ujb.api.sanity.io/v2023-05-28/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20_id%20%3D%3D%20'${productID}'%5D%7B%22images%22%3A%20images%5B%5D.asset._ref%2Ctitle%2C%20subTitle%2C%20price%2C%20_id%2Csizes%2C%20productDetails%2C%20productCare%2C%20stripePriceAPIID%7D%0A%0A%0A`,
    {next: {revalidate: 600}});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function Page
({
   params,
 }: {
  params: {
    productID: string;
  };
}) {

  const productID = params.productID
  const data = await getProduct(productID);

  return (
    <main className={`${sora.className} container flex flex-col min-h-[90%] my-16`}>
      <div className={'grid grid-cols-12 w-full gap-x-3'}>
        <ImagesBox images={data.result[0].images}/>
        {/*Info*/}
        <div
          className={'mt-16 md:mt-0 md:px-6 col-span-12 md:col-span-4 flex flex-col justify-center gap-y-6'}>
          <div>
            <h1 className={'text-3xl'}>{data.result[0].title}</h1>
            <h2 className={'text-xl font-semibold text-gray-500'}>{data.result[0].subTitle}</h2>
          </div>
          <SizeSelector sizes={data.result[0].sizes}/>
          <Quantity/>
          <AddToCart product={data.result[0]}/>
        </div>
      </div>
      <div>
        <Overview/>
        <div className={'flex flex-col items-center'}>
          <div
            className={'grid grid-cols-12 gap-5 sm:max-w-[80%] justify-items-center border-t border-t-black pt-5 px-5'}>

            <div className={'col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start w-full'}>
              <label className={'uppercase text-gray-500 text-xl font-semibold'}>Product Details</label>
            </div>
            <div className={'col-span-12 sm:col-span-8'}>
              <p className={'uppercase text-gray-500 text-md font-light text-justify'}>
                {data.result[0].productDetails}
              </p>
            </div>

            <div className={'col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start w-full'}>
              <label className={'uppercase text-gray-500 text-xl font-semibold'}>Product Care</label>
            </div>
            <div className={'col-span-12 sm:col-span-8 w-full'}>

              <ul className={'list-disc text-gray-500 text-md ml-4'}>
                {
                  data.result[0].productCare.map((bullet: string, index: number) => {
                    return (
                      <li key={index}>
                        <div>
                          <label className={'block uppercase text-gray-500 text-md font-light w-full text-left'}>
                            {bullet}
                          </label>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;

