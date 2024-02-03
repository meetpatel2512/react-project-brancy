import React from 'react';
import { IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import ProductsDivider from '../ProductsDivider';
import { TopsalesData } from '../../Data/index.js';
function TopSales() {
  return <div className='mx-auto md:w-[1280px] md:ps-10'>
    <div className='grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-6'>
      {
        TopsalesData.map((data) => {
          return <div className='h-96 flex flex-col md:h-[550px] md:w-[350px] gap-2' id={data.id}>
            <div className='flex aspect-3/4 rounded-xl justify-center items-center overflow-hidden' >
              <img src={data.imgURL} alt="" className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-2 px-5'>
              <div className='flex items-center justify-between w-full flex-wrap'>
                <div className='flex gap-1 text-red-500 text-lg'>
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarHalf />
                </div>
                <p className='italic text-gray-300 text-base md:text-lg'>{data.reviews} reviews</p>
              </div>
              <div>
                <p className='capitalize text-xl md:text-2xl'>{data.title}</p>
              </div>
              <div className='flex gap-5 text-base md:text-lg'>
                <p className='font-semibold'>${data.price}</p>
                <p className='text-gray-300'><strike>{data.cutoffPrice}</strike></p>
              </div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}

export default TopSales;
