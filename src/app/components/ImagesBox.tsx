'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {dataset, projectId} from "../../../sanity/env";
import imageUrlBuilder from "@sanity/image-url";

function ImagesBox({images}: { images: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }

  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)


  return (
    <>
      {/*  Images*/}
      <div
        className={'col-span-3 md:col-span-2 flex flex-col items-center justify-start gap-y-2'}>
        {
          images?.map((image: any, index: number) => {
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
          <Image src={urlFor(images[currentImageIndex]).toString()} alt={'Product Image'} height={600}
                 width={600}/>
        </div>
      </div>
    </>
  );
}

export default ImagesBox;
