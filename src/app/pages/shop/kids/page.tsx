import React from 'react';
import {HiOutlineEmojiSad} from "react-icons/hi";

function Page() {
  return (
      <div className={'flex flex-col gap-y-7 justify-center items-center h-screen'}>
        <HiOutlineEmojiSad size={50} color={'#6f7784'}/>
        <h1 className={'text-3xl text-gray-500'}>
          Sorry! No products to show
        </h1>
    </div>
  );
}

export default Page;
