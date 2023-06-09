import React from 'react'
import { useSelector } from 'react-redux';
import { cartImg, bazarLogo } from '../assets/index';
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
    return (
    <div className="w-full h-20 bg-[url(https://static.vecteezy.com/system/resources/previews/002/294/859/non_2x/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg)] bg-cover border-b-[1px] borber-b-gray-800 font-titleFont sticky top-0 z-50">
    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
      <Link to= "/">
      <div>
        <img className='w-28' src={bazarLogo} alt="bazarLogo"></img>
      </div>
      </Link>
      <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
      </ul>
      <Link to="/cart">
      <div className='relative'>
        <img className='w-6' src={cartImg} alt="cartImg"></img>
        <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
      </div>
      </Link>
        <img className='w-8 h-8 rounded-full'
       src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='userLogo'></img>
    </div>
    </div>
    </div>
  )
}

export default Header;