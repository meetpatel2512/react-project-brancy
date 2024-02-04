import React from 'react';

function Banner() {
  return <div className='md:mx-auto md:w-[1280px] md:ps-10 mb-20 px-3'>

    <div className='flex relative'>

      <div className='h-screen flex flex-wrap before:content-[" "] before:bg-[#d9f1e1] before:absolute before:h-full before:w-1/2 before:right-0'>

        <div className='flex-grow flex-shrink-0 basis-72 relative flex justify-center items-center md:items-start flex-col' >

          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp" alt="" className='md:absolute md:left-0 md:right-56 mx-auto md:top-32 w-44 md:w-[330px] z-10' />

          <div className='flex flex-col gap-4 md:text-start text-center'>
            <h1 className='uppercase font-bold text-4xl md:text-7xl z-20'>clean fresh</h1>
            <p className='text-lg md:text-2xl  my-3 mx-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ut, aspernatur recusandae aliquid illo nulla eum officia </p>
          </div>

          <button type="button" className='my-4 flex justify-center items-center uppercase border-[1px] bor border-black px-9 py-3 text-md tracking-[5px] rounded-[50px] bg-transparent transition-all duration-300 hover:border-transparent hover:text-white hover:bg-red-400'>buy now</button>
        </div>

        <div className='flex-1 flex-grow flex-shrink-0 basis-72 flex justify-center items-center z-10'>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp" alt="" className=' w-5/6 md:relative ' />
        </div>
      </div>
    </div>
  </div >

}

export default Banner;
