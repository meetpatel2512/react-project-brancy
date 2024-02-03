import React from 'react';
import { BlogsData } from '../../Data/index.js';
function Blogs() {
  return <div className='mx-auto md:w-[1280px]'>
    <div className='grid grid-auto-fit-md justify-items-center gap-5'>
      {
        BlogsData.map((data) => {
          return <div className='flex flex-col gap-6 px-10'>
            <div className='w-64 md:w-[350px] aspect-square rounded-xl overflow-hidden' id={data.imgURL}>
              <img src={data.imgURL} alt="" className='h-full w-full' />
            </div>
            <div className='flex flex-col gap-4 w-64 md:w-[350px]'>
              <div>
                <button type='button' className={`uppercase text-sm text-white py-2 px-8 rounded-3xl ${data.btnColor} transition-all duration-500 hover:${data.hover_btnColor}`}>{data.btntext}</button>
              </div>
              <div >
                <p className='text-lg md:text-2xl font-semibold text-black transition-all cursor-pointer duration-500 hover:text-red-400'>{data.title}</p>
              </div>
              <div className='flex flex-wrap justify-between uppercase text-sm'>
                <p className=''>BY: <span className='text-gray-500 transition-all cursor-pointer duration-500 hover:text-red-400'>{data.author}</span> </p>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}

export default Blogs;
