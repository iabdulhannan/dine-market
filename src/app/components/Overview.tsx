import React from 'react';
import {PrimaryButton} from "@/app/components/PrimaryButton";

function Overview() {
  return (
    <section
      className={'relative my-14 sm:mt-24 sm:mb-32 w-full flex justify-center items-center'}>
      <div className={'relative flex flex-col justify-center items-center gap-y-4 z-10 w-4/5 sm:w-3/5'}>
        <h1 className={'text-2xl text-center sm:text-left sm:text-3xl font-semibold'}>Product Information</h1>
      </div>
      <div className={'absolute justify-center text-center w-full z-[-1]'}>
        <h1 className={'text-6xl xs:text-8xl sm:text-9xl text-gray-100 font-semibold tracking-tighter'}>
          Overview
        </h1>
      </div>
    </section>
  );
}


export default Overview;
