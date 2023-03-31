import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md';
import { useLocation } from "react-router-dom";

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation()
  useEffect(() =>{
    setDetails(location.state.item);
  }, [location]);
  return (
    <div>
      <div className='max-w-screen-x1 mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img 
          className='w-full h-[550px] object-cover' 
          src={details.image}
          alt='productImg'>
          </img>
          <div className='absolute top-4 right-0'>
          {
            details.isNew && (
              <p 
              className='bg-red-500 text-white font-semibold font-titleFont px-8 py-1'>
                Sale
                </p>
            )
          }
            </div>
          </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
            <div>
              <h2 className='text-4x1 font-semibold'>{details.title}</h2>
              <div className='flex items-center gap-4 mt-3'>
                <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
                <p className='text-2x1 font-medium text-gray-900'>${details.price}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex text-base'>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              </div>
              <p className='text-xs text-gray-500'>(1 Customer review)</p>
             </div>
             <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
        </div>
      </div>
    </div>
  )
};

export default Product