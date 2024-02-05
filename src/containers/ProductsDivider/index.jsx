import React from 'react';
import { ProductsDividerData } from '../../Data/index.js';
function ProductsDivider() {
  return <div className=' my-20 xsm:px-0 px-5'>
    <div className='grid grid-cols-2 max-w-6xl mx-auto md:grid-cols-3 justify-items-center gap-5'>

      {
        ProductsDividerData.map((data) => {
          return <div className='rounded-xl overflow-hidden' key={data.imgURL}>
            <img src={data.imgURL} alt="" className='h-full w-full' />
          </div>
        })
      }
    </div>

  </div>
}

export default ProductsDivider;
