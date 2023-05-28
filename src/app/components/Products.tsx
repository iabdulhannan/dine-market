import React from 'react';
import SectionHeadings from "@/app/components/SectionHeadings";
import Image from "next/image";
import {PrimaryButton} from "@/app/components/PrimaryButton";
import Link from "next/link";

function Products() {
  return (
    <section className={'w-full mt-24'}>
      <SectionHeadings miniHeading={'Products'} mainHeading={'Check What We Have'}/>
      <div className={'flex flex-wrap gap-5 justify-around items-center'}>
        <div className={'flex flex-col items-center justify-center gap-y-3'}>
          <Image src={'/images/productsGirl1.png'} alt={'Products Girl 1'} width={300} height={300}/>
          <label className={'font-semibold'}>Brushed Raglan Sweatshirt</label>
          <label className={'font-semibold'}>$195</label>
        </div>
        <div className={'flex flex-col items-center justify-center gap-y-3'}>
          <Image src={'/images/productsGirl2.png'} alt={'Products Girl 2'} width={300} height={300}/>
          <label className={'font-semibold'}>Cameryn Sash Tie Dress</label>
          <label className={'font-semibold'}>$545</label>
        </div>
      </div>
      <div className={'mt-24'}>
        <label className={'text-5xl font-semibold'}>Unique and Authentic Vintage Designer Jewellery</label>

        <div className={'mt-20 flex flex-col gap-3'}>
          <div className={'flex flex-row flex-wrap justify-between'}>
            <div className={'w-full xs:w-[40%]'}>
              <label className={'font-semibold text-lg'}>Using Good Quality Materials</label>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className={'w-full xs:w-[40%]'}>
              <label className={'font-semibold text-lg'}>100% Handmade Products</label>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={'flex flex-row flex-wrap justify-between'}>
            <div className={'w-full xs:w-[40%]'}>
              <label className={'font-semibold text-lg'}>Modern Fashion Design</label>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className={'w-full xs:w-[40%]'}>
              <label className={'font-semibold text-lg'}>Discount for Bulk Orders</label>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className={'mt-14 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4'}>
          <div className={'min-w-fit'}>
            <Image src={'/images/productsGirl3.webp'} alt={'Products Girl 3'} width={300} height={300}/>
          </div>
          <div className={'min-w-[50%] flex flex-col items-center gap-y-3 mt-3'}>
            <p className={'font-light text-center sm:text-left'}>
              This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to
              detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>
            <Link href={'/allProducts'} className={'mt-4'}>
              <PrimaryButton classNames={'px-14'} title={'See All Products'} onClick={undefined}/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
