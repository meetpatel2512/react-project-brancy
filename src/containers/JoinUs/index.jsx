import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

function JoinUs() {
  return <div className=' my-20 px-3'>
    <div className='flex justify-around max-w-6xl mx-auto h-60 rounded-xl items-center joinus flex-wrap'>
      <div>
        <p className='text-5xl capitalize'>join with us</p>
        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='flex'>
        <input type="text" placeholder='Enter Your Email' className=' px-2 py-1 ring-2 ring-red-400 rounded-md hover:ring-purple-500 outline-none' />
        <button type="button" className='flex items-center justify-center bg-red-700 rounded-md px-2 py-2'><FaTelegramPlane size={20} className='text-white' /></button>
      </div>
    </div>
  </div>
}

export default JoinUs;
