import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
function Header() {
  return <div className='ps-5 flex py-4 items-center md:ps-10 fixed w-screen z-10'>
    <div className="h-10 md:h-14">
      <img src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp" alt="log" className="w-full h-full" />
    </div>

    <div className='flex justify-between w-full'>
      <div className='ms-20'>
        <ul className='md:flex gap-8 capitalize hidden'>
          <li className='hover:text-red-500 cursor-pointer'>home</li>
          <li className='hover:text-red-500 cursor-pointer'>about</li>
          <li className='hover:text-red-500 cursor-pointer'>shop</li>
          <li className='hover:text-red-500 cursor-pointer'>blog</li>
          <li className='hover:text-red-500 cursor-pointer'>pages</li>
          <li className='hover:text-red-500 cursor-pointer'>contact</li>
        </ul>
      </div>
      <div className='flex gap-6 me-10'>
        <IoMdSearch className='cursor-pointer text-2xl' />
        <FaShoppingBasket className='cursor-pointer text-2xl' />
        <FaUser className='cursor-pointer text-2xl' />
      </div>
    </div>
  </div>
}

export default Header;
