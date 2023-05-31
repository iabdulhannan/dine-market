import React from 'react';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from "../../../../../sanity/env";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://u4m48ujb.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20isForFemales%20%3D%3D%20false%5D%7B%0A%20%20%22firstImage%22%3A%20images%5B0%5D.asset._ref%2C%0A%20%20%20%20title%2C%20subTitle%2C%20price%2C%20_id%0A%7D%0A',
    {next: {revalidate: 600}});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


async function Page() {
  const data = await getData();
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }

  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)

  return (
    <div className={'container flex min-h-screen flex-col items-center justify-between my-16'}>
      <div className={'flex flex-row justify-around gap-x-3 gap-y-7 flex-wrap w-full'}>

        {
          data.result.map((product: any) => {
            return (
              // eslint-disable-next-line react/jsx-no-undef
              <Link href={`pages/shop/${product._id}`} className={'cursor-pointer min-w-md flex flex-col gap-2 hover:scale-110 transition-all duration-300'} key={product._id}>
                <Image src={urlFor(product.firstImage).toString()} alt={'Product Image'} height={400} width={300}/>
                <h2 className={'font-semibold text-xl'}>{product.title}</h2>
                <label className={'font-semibold text-lg text-gray-500'}>{product.subTitle}</label>
                <label className={'font-semibold text-2xl'}>${product.price}</label>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default Page;
