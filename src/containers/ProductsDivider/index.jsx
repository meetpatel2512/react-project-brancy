import React from 'react';

function ProductsDivider() {
  return <div className='mx-auto md:w-[1280px] md:ps-10'>
    <div className='flex sm:justify-start md:justify-between justify-center items-center flex-wrap gap-6'>
      <div className='w-52 md:w-[350px] aspect-square rounded-xl overflow-hidden'>
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/1.webp" alt="" className='h-full w-full' />
      </div>
      <div className='w-52 md:w-[350px] aspect-square rounded-xl overflow-hidden'>
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/2.webp" alt="" className='h-full w-full' />
      </div>
      <div className='w-52 md:w-[350px] aspect-square rounded-xl overflow-hidden'>
        <img src="https://template.hasthemes.com/brancy/brancy/assets/images/shop/banner/3.webp" alt="" className='h-full w-full' />
      </div>
    </div>
  </div>
}

export default ProductsDivider;
