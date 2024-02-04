import React from 'react';

function Badge({bg_color,value}) {
  return <div>
    <button type="button" className={`text-white flex justify-center items-center px-3 py-[1px] text-base ${bg_color} md:px-6 md:py-[2px] md:text-lg rounded-[50px]`}>{value}</button>
  </div>
}

export default Badge;
