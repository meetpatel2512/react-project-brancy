import React from 'react';

function Banner() {
  return <div className='min-h-fit mb-20'>

    <div className='relative min-h-fit py-10 h-full'>

      <div className='flex flex-col md:flex-row'>

        <div className=' flex-grow flex-shrink-0 basis-72  xsm:pl-10 xsm:pt-10 flex justify-center items-center xsm:items-start flex-col' >


          <div className='flex flex-col gap-1 relative xsm:text-left text-center'>
            <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/text-theme.webp" alt="" className='md:absolute xsm:left-0 xsm:mx-0 mx-auto lg:-top-[10rem] xsm:-top-28 w-44 md:w-[200px] lg:w-[360px] z-10' />
            <h1 className='uppercase font-bold text-4xl lg:text-7xl z-20'>clean fresh</h1>
            <p className='text-lg lg:text-2xl  my-3 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ut, aspernatur recusandae aliquid illo nulla eum officia </p>
          </div>

          <button type="button" className='my-4 flex justify-center items-center uppercase border-[1px] border-black px-9 py-3 text-md tracking-[5px] rounded-[50px] bg-transparent transition-all duration-300 hover:border-transparent hover:text-white hover:bg-red-400'>buy now</button>
        </div>

        <div className='flex-1 flex-grow flex-shrink-0 basis-72 flex justify-center items-center z-10'>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/slider/slider1.webp" alt="" className=' md:relative ' />
        </div>
      </div>

      <div className='absolute bg-[#d9f1e1] -z-10 right-0 top-0 h-full w-1/2'><span className='sr-only'>green right</span> </div>
    </div>
  </div>

}

export default Banner;
