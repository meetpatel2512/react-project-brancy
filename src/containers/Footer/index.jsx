import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa";
function Footer() {
  return <div className='w-screen'>
    <div className='mx-auto md:w-[1280px] md:ps-10'>
      <div className=' flex justify-between flex-wrap py-5 gap-8 px-5'>
        <div className='flex flex-col gap-4 md:w-1/3'>
          <img src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp" alt="log" height={80} width={80} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ex minima laboriosam eaque qui fuga voluptates sunt nemo ullam similique.</p>
        </div>

        <div className='capitalize flex flex-col gap-4'>
          <p className='text-xl font-semibold'>information</p>
          <div className='grid grid-cols-3 gap-5'>
            <p>blog</p>
            <p>about us</p>
            <p>contact</p>
            <p>privacy</p>
            <p>login</p>
            <p>shop</p>
            <p>my account</p>
            <p>FAQs</p>
          </div>
        </div>

        <div className='flex flex-col justify- h-40 gap-6 '>
          <p className='text-xl font-semibold'>Social Info</p>
          <div className='flex gap-10'>
            <FaTwitter />
            <FaFacebookF />
            <FaPinterestP />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Footer;
