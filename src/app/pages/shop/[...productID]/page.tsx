'use client'

import React, {useState} from 'react';
import {dataset, projectId} from "../../../../../sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import useSWR from "swr";
import {Sora} from "next/font/google";
import Quanitity from "@/app/components/Quanitity";
import {PrimaryButton} from "@/app/components/PrimaryButton";
import Overview from "@/app/components/Overview";

const sora = Sora({subsets: ['latin']})
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Page({params}: { params: any }) {

  const productID = params.productID

  const {data, error, isLoading} = useSWR(
    `https://u4m48ujb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20_id%20%3D%3D%20'${productID}'%5D%7B%22images%22%3A%20images%5B%5D.asset._ref%2Ctitle%2C%20subTitle%2C%20price%2C%20_id%2Csizes%2C%20productDetails%2C%20productCare%7D%0A%0A%0A`,
    fetcher
  );
  // const data = (await getProduct(productID)).result;
  // const data = fetcher()
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }

  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <main className={`${sora.className} container flex flex-col min-h-[90%] my-16`}>
      <div className={'grid grid-cols-12 w-full gap-x-3'}>
        {/*  Images*/}
        <div
          className={'col-span-3 md:col-span-2 flex flex-col items-center justify-start gap-y-2'}>
          {
            data.result[0].images?.map((image: any, index: number) => {
              return (
                <div key={index} onClick={() => setCurrentImageIndex(index)}
                     className={`border ${index === currentImageIndex ? 'border-black' : 'border-none'} cursor-pointer`}>
                  <Image src={urlFor(image).toString()} alt={'Product Image'} height={120} width={120}/>
                </div>
              )
            })
          }
        </div>
        {/*  Main Image*/}
        <div className={'col-span-9 md:col-span-6 flex items-center justify-center'}>
          <div>
            <Image src={urlFor(data.result[0].images[currentImageIndex]).toString()} alt={'Product Image'} height={600}
                   width={600}/>
          </div>
        </div>
        {/*  Info*/}
        <div
          className={'mt-16 md:mt-0 md:px-6 col-span-12 md:col-span-4 flex flex-col justify-center gap-y-6'}>
          <div>
            <h1 className={'text-3xl'}>{data.result[0].title}</h1>
            <h2 className={'text-xl font-semibold text-gray-500'}>{data.result[0].subTitle}</h2>
          </div>
          <div>
            <label className={'text-md uppercase font-semibold'}>Select Size</label>
            <div className={'flex flex-row justify-start items-center gap-x-10 mt-4'}>
              {
                data.result[0].sizes.map((size: string, index: number) => {
                  return (
                    <label key={index} className={'text-lg font-semibold text-gray-400'}>{size}</label>
                  )
                })
              }
            </div>
          </div>
          <Quanitity/>
          <div className={'flex justify-start items-center gap-x-3'}>
            <PrimaryButton title={'Add to Cart'} onClick={undefined}/>
            <label className={'text-xl uppercase font-semibold'}>${data.result[0].price}</label>
          </div>
        </div>
      </div>
      <div>
        <Overview/>
        <div className={'flex flex-col items-center'}>
          <div className={'grid grid-cols-12 gap-5 sm:max-w-[80%] justify-items-center border-t border-t-black pt-5 px-5'}>

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
