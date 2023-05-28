import React from 'react';
import {Sora} from "next/font/google";
import {ShoppingCart} from "lucide-react";
import Image from "next/image";

const sora = Sora({subsets: ['latin']})

function Hero() {
  return (
    <section className={`${sora.className} grid grid-cols-12 lg:h-screen w-full`}>
      <div className={'col-span-12 lg:col-span-6 w-full p-5 flex flex-col items-start gap-y-12'}>
        {/*Badge*/}
        <div className={'bg-blue-100 py-2 px-4 rounded-md text-center w-32'}>
          <label className={'text-blue-700 font-semibold '}>Sale 70%</label>
        </div>
        <h1 className={'text-5xl sm:text-6xl font-semibold'}>
          An Industrial Take on Streetwear
        </h1>
        <label className={'text-gray-500 max-w-lg'}>
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </label>
        <button
          className={'bg-black w-full sm:w-96 lg:w-44 h-16 flex justify-center gap-x-3 lg:gap-0 lg:justify-around items-center p-2 border-l-2 border-gray-500 border-t-2'}>
          <ShoppingCart color={'#ffffff'} size={30} className={'w-[40px]'}/>
          <label className={'text-white font-semibold'}>Start Shopping</label>
        </button>
        <div className={'grid grid-cols-12 gap-x-5'}>
          <div className={'col-span-3'}>
            <Image src={'/images/bazaar.webp'} alt={'Bazaar Logo'} width={150} height={200}/>
          </div>
          <div className={'col-span-3'}>
            <Image src={'/images/bustle.webp'} alt={'Bazaar Logo'} width={150} height={200}/>
          </div>
          <div className={'col-span-3'}>
            <Image src={'/images/versace.webp'} alt={'Bazaar Logo'} width={150} height={200}/>
          </div>
          <div className={'col-span-3'}>
            <Image src={'/images/instyle.webp'} alt={'Bazaar Logo'} width={150} height={200}/>
          </div>
        </div>
      </div>
      <div className={'md:col-span-6 hidden lg:flex justify-center items-center relative '}>
        {/*Circle*/}
        <div className={'bg-opacity-5 rounded-full'} style={{backgroundColor: 'rgb(242,213,184, 0.5)'}}>
          <div style={{marginTop: -30, marginBottom: -25}}>
            <Image src={'/images/hero.webp'} alt={'Hero Image'} height={660} width={600}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
