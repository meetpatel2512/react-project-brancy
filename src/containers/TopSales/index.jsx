import React from 'react';
import { IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
function TopSales() {
  return <div className='mx-auto md:w-[1280px] md:ps-10'>
    <div className='aspect-square  bg-emerald-500'>
      <div className='flex h-48 aspect-3/4 rounded-xl justify-center items-center overflow-hidden' >
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/1.webp" alt="" className='w-full h-full' />
      </div>
      <div>
        <div className='flex items-center justify-between w-full'>
          <div className='flex gap-1 text-red-500'>
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarHalf />
          </div>
          <p className='italic'>150 reviews</p>
        </div>
        <div>
          <p className='capitalize'>readable content dX22</p>
        </div>
        <div>
          <p>$210.00</p>
          <p><strike>300.00</strike></p>
        </div>
      </div>
    </div>
  </div>
}

export default TopSales;
