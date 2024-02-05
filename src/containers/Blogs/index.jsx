import React from 'react';
import { BlogsData } from '../../Data/index.js';
import Section from '../../components/Section/index.jsx'
function Blogs() {
  return <div className='my-20 xsm:px-0 px-5'>
    <Section title="blog posts" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis" />
    <div className='grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto justify-items-center gap-5'>
      {
        BlogsData.map((data) => {
          return <div className='flex flex-col gap-6' key={data.imgURL}>
            <div className='rounded-xl overflow-hidden'>
              <img src={data.imgURL} alt="" className='h-full w-full' />
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <button type='button' className={`uppercase text-sm text-white py-2 px-8 rounded-3xl ${data.btnColor} transition-all duration-500`}>{data.btntext}</button>
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
