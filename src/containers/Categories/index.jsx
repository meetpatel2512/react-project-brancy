import React from 'react';
import { CategoriesData } from '../../Data/index.js';
import Badge from '../../components/Badge/index.jsx';
function Categories() {
  return <div className='md:ps-10 my-20 px-3'>
    <div className='flex justify-center lg:justify-between flex-wrap max-w-6xl mx-auto items-center gap-4'>

      {CategoriesData.map((data) => {
        return <div className={`card min-w-44 relative transition-all duration-500 cursor-pointer hover:shadow-2xl aspect-square md:aspect-3/4 flex flex-col justify-center items-center gap-6 rounded-lg ${data.bgcolor}`} key={data.image}>

          <div className='absolute top-3 right-4 md:top-0 md:right-0 md:-my-3 md:-rotate-90'>
            {data.badge && <Badge bg_color={data.badge_color} value={data.badge} />}
          </div>
          <img src={data.image} alt="" className='' />

          <div className='flex justify-center items-center gap-1 flex-col'>
            <div className={`h-[1px] w-11 bg-red-500`}></div>
            <div>
              <p className='capitalize'>{data.title}</p>
            </div>
          </div>

        </div>
      })}

    </div>
  </div>
}

export default Categories;
