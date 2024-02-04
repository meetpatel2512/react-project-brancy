import React from 'react'

const index = ({title,desc}) => {
    return (
        <div>
            <div className='flex text-center mx-5 justify-center items-center gap-5 flex-col mb-20'>
                <p className='text-[3rem] capitalize'>{title}</p>
                <p className='md:w-[430px]'>{desc}</p>
            </div>
        </div>
    )
}

export default index;
