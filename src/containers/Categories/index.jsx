import React from 'react';
import { CategoriesData } from '../../Data/index.js';
import Badge from '../../components/Badge/index.jsx';
function Categories() {
  return <div className='mx-auto md:w-[1280px] md:ps-10 my-20 px-3'>
    <div className='flex justify-center lg:justify-between flex-wrap items-center gap-4'>

      {CategoriesData.map((data) => {
        return <div className={`card h-52 relative transition-all duration-500 cursor-pointer hover:shadow-2xl aspect-square md:aspect-3/4 flex flex-col justify-center items-center gap-6 rounded-lg ${data.bgcolor}`} key={data.image}>

          <div className='absolute top-3 right-4 md:top-0 md:right-0 md:-my-3 md:-rotate-90'>
            {data.badge && <Badge bg_color={data.badge_color} value={data.badge}/>}
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

      {/* <div className='card h-52 transition-all duration-500 cursor-pointer hover:shadow-2xl aspect-square md:aspect-3/4 bg-green-200 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" className='' />

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div> */}

      {/* <div className='h-52 aspect-square md:aspect-3/4 bg-yellow-100 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <div>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" />
        </div>

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div>

      <div className='h-52 aspect-square md:aspect-3/4 bg-blue-200 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <div>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" />
        </div>

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div>

      <div className='h-52 aspect-square md:aspect-3/4 bg-orange-200 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <div>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" />
        </div>

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div>

      <div className='h-52 aspect-square md:aspect-3/4 bg-red-200 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <div>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" />
        </div>

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div>

      <div className='h-52 aspect-square md:aspect-3/4 bg-orange-100 flex flex-col justify-center items-center gap-6 rounded-lg'>
        <div>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/category/1.webp" alt="" />
        </div>

        <div className='flex justify-center items-center gap-1 flex-col'>
          <div className='h-[2px] w-11 bg-red-400'></div>
          <div>
            <p className='capitalize'>hair care</p>
          </div>
        </div>
      </div> */}

    </div>
  </div>
}

export default Categories;
