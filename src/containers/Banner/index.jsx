import React from 'react';

function Banner() {
  return <div>
    <div className='flex h-screen'>

      <div className='flex-1  relative flex justify-center items-start flex-col px-44 mt-52' >

        <div className='absolute top-16 w-[330px] -z-10'>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp" alt="" className='w-full h-full' />
        </div>

         <div className='flex flex-col gap-4 '>
          <h1 className='uppercase font-bold text-7xl'>clean fresh</h1>
          <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ut, aspernatur recusandae aliquid illo nulla eum officia </p>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center relative before:content-[" "] before:bg-[#d9f1e1] before:absolute before:h-full before:w-full before:right-0'>
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp" alt="" className='relative z-10 right-40' />
      </div>
    </div>
  </div >;
}

export default Banner;
