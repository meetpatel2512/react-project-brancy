import React from 'react';
import { IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import { TopsalesData } from '../../Data/index.js';
import Section from '../../components/Section/index.jsx'
import Badge from '../../components/Badge/index.jsx'
function TopSales() {
  return <div className='mx-auto md:w-[1280px] md:ps-10 my-20 px-3'>
<Badge/>
    <Section title="top sales" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis" />

    <div className='grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-6'>
      {
        TopsalesData.map((data) => {
          return <div className='h-96 relative flex flex-col md:h-[550px] md:w-[350px] gap-2' key={data.id}>
            {data.badge&& <div className='absolute top-2 right-2 md:top-5 md:right-5'>
            <Badge bg_color={data.badge_color} value={data.badge}/>
            </div>}
            
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
