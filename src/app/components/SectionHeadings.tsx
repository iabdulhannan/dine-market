import React from 'react';

function SectionHeadings({miniHeading, mainHeading}: {miniHeading: string, mainHeading: string}) {
  return (
    <div className={'flex flex-col justify-center items-center gap-y-3 my-5'}>
    {/*  Mini Heading*/}
      <label className={'uppercase font-semibold text-blue-600 text-sm'}>{miniHeading}</label>
    {/*  Main Heading*/}
      <h1 className={'text-black font-semibold text-4xl'}>{mainHeading}</h1>
    </div>
  );
}

export default SectionHeadings;
