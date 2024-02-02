import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
function Header() {
  return <div className='flex py-4 items-center ps-10 fixed w-screen z-10'>
    <div>
      <img src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp" alt="log" height={60} width={60} />
    </div>

    <div className='flex justify-between w-full'>
      <div className='ms-20'>
        <ul className='flex gap-8 capitalize'>
          <li className='hover:text-red-500 cursor-pointer'>home</li>
          <li className='hover:text-red-500 cursor-pointer'>about</li>
          <li className='hover:text-red-500 cursor-pointer'>shop</li>
          <li className='hover:text-red-500 cursor-pointer'>blog</li>
          <li className='hover:text-red-500 cursor-pointer'>pages</li>
          <li className='hover:text-red-500 cursor-pointer'>contact</li>
        </ul>
      </div>
      <div className='flex gap-6  me-20'>
        <IoMdSearch className='cursor-pointer text-2xl' />
        <FaShoppingBasket className='cursor-pointer text-2xl' />
        <FaUser className='cursor-pointer text-2xl' />
      </div>
    </div>
  </div>
}

export default Header;
