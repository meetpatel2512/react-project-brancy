import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

function Header() {
  return <div className='mx-auto md:w-[1280px] md:ps-10 px-3'>
    <div className="flex items-center relative py-3 ps-5 w-full bg-white z-10">

      <img src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp" alt="log" className="mx-5 w-16 object-cover" />
      <div className="w-full">

        <div className='flex justify-between'>
          <div className=''>
            <ul className='md:flex gap-8 capitalize hidden'>
              <li className='hover:text-red-500 cursor-pointer'>home</li>
              <li className='hover:text-red-500 cursor-pointer'>about</li>
              <li className='hover:text-red-500 cursor-pointer'>shop</li>
              <li className='hover:text-red-500 cursor-pointer'>blog</li>
              <li className='hover:text-red-500 cursor-pointer'>pages</li>
              <li className='hover:text-red-500 cursor-pointer'>contact</li>
            </ul>
          </div>
          <div className='flex gap-6'>
            <IoMdSearch className='cursor-pointer text-2xl' />
            <FaShoppingBasket className='cursor-pointer text-2xl' />
            <FaUser className='cursor-pointer text-2xl' />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Header;
