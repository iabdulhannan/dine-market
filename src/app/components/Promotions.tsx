import React from 'react';
import SectionHeadings from "@/app/components/SectionHeadings";
import Image from "next/image";

function Promotions() {
  return (
    <section className={'w-full'}>
      <SectionHeadings miniHeading={'Promotions'} mainHeading={'Our Promotion Events'}/>
      <div className={'flex flex-row flex-wrap gap-4'}>
        <div className={'flex flex-col flex-grow gap-4'}>
          {/*60% off*/}
          <div className={'h-36 px-3 flex flex-row justify-between items-center bg-gray-300'}>
            <div>
              <label className={'block font-semibold text-xl'}>GET UP TO <span className={'text-3xl'}>60%</span>
              </label>
              <label className={'block'}>for the summer season</label>
            </div>
            <div>
              <Image src={'/images/promotionGirl.webp'} alt={'Promotion Girl'} width={180} height={180}/>
            </div>
          </div>
          {/*30% off*/}
          <div className={'h-36 flex flex-col items-center justify-center flex-grow gap-y-3 bg-gray-900'}>
            <label className={'text-3xl text-white font-bold'}>GET 30% OFF</label>
            <label className={'text-sm text-white'}>USE PROMO CODE</label>
            <label
              className={'text-lg tracking-widest text-white bg-gray-500 px-4 py-1 rounded-lg'}>DINEWEEKENDSALE</label>
          </div>
        </div>
        <div className={'flex flex-col justify-between items-center flex-grow pb-0 pt-3 px-2'} style={{backgroundColor: '#efe1c7'}}>
          <div>
            <label className={'text-md'}>Flex Sweatshirt<br/></label>
            <label><span className={'text-md line-through'}>$100.00</span>{' '}<span
              className={'font-semibold'}>$75.00</span></label>
          </div>
          <div>
            <Image src={'/images/promotionBoy1.webp'} alt={'Promotion Girl'} width={180} height={180}/>
          </div>
        </div>
        <div className={'flex flex-col justify-between items-center flex-grow pb-0 pt-3 px-2 bg-gray-300'}>
          <div>
            <label className={'text-md'}>Flex Push Button Bomber<br/></label>
            <label><span className={'text-md line-through'}>$225.00</span>{' '}<span
              className={'font-semibold'}>$190.00</span></label>
          </div>
          <div>
            <Image src={'/images/promotionBoy2.webp'} alt={'Promotion Girl'} width={180} height={180}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotions;
