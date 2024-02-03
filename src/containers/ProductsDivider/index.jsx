import React from 'react';
import { ProductsDividerData } from '../../Data/index.js';
function ProductsDivider() {
  return <div className='mx-auto md:w-[1280px]'>
    <div className='grid grid-auto-fit-md justify-items-center gap-5'>

      {
        ProductsDividerData.map((data) => {
          return <div className='w-64 md:w-[350px] aspect-square rounded-xl overflow-hidden' id={data.imgURL}>
            <img src={data.imgURL} alt="" className='h-full w-full' />
          </div>
        })
      }
    </div>

  </div>
}

export default ProductsDivider;
