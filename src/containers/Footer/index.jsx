import React from 'react';
import { FaHeart } from "react-icons/fa";

import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
function Footer() {
  return <div className='w-screen '>
    <div className='mx-auto md:w-[1280px] md:ps-10 px-3 bg-gray-50'>
      <div className=' flex justify-between flex-wrap py-5 gap-8 px-5'>
        <div className='flex flex-col gap-4 md:w-1/3'>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp" alt="log" height={80} width={80} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ex minima laboriosam eaque qui fuga voluptates sunt nemo ullam similique.</p>
        </div>

        <div className='capitalize flex flex-col gap-4'>
          <p className='text-xl font-semibold'>information</p>
          <div className='grid grid-cols-3 gap-5'>
            <p className='text-black transition-all duration-500 cursor-pointer hover:text-red-500 '>blog</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>about us</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>contact</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>privacy</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>login</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>shop</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>my account</p>
            <p className='text-black transition-all duration-500 cursor-pointer  hover:text-red-500'>FAQs</p>
          </div>
        </div>

        <div className='flex flex-col justify- h-40 gap-6 '>
          <p className='text-xl font-semibold'>Social Info</p>
          <div className='flex gap-10'>
            <FaTwitter className='text-black transition-all duration-500 cursor-pointer hover:text-red-500 '/>
            <FaFacebookF className='text-black transition-all duration-500 cursor-pointer hover:text-red-500 '/>
            <FaPinterestP className='text-black transition-all duration-500 cursor-pointer hover:text-red-500 '/>
          </div>
        </div>
      </div>
      <div className='border-t-2 py-5'>
        <p className='flex justify-center items-center gap-2 flex-wrap'>&copy; 2024 Brancy. Made with <FaHeart className='text-red-500'/> by <span className='text-gray-600 transition-all cursor-pointer duration-500 hover:text-red-400'>Meet patel</span></p>
      </div>
    </div>
  </div>
}

export default Footer;
