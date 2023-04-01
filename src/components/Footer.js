import React from 'react'
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { bazarLogo, paymentLogo, footerbg } from '../assets';
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=' bg-[url(https://comuti.in/wp-content/uploads/2021/07/footer-bg.png)] bg-cover text-[#949494] py-20 font-titleFont'>
       <div className='max-w-screen-x1 mx-auto grid grid-cols-4'>
        {/* ============ LogoIcon Start here ============ */}
        <div className='flex flex-col gap-7'>
          <img className='w-32' src={bazarLogo} alt='BazarLogo'></img>
          <p className='text-white text-sm tracking-wide'>@ Bazar-ecommerce.com</p>
          <img className='w-56' src={paymentLogo} alt="paymentLogo"></img>
          <div className='flex gap-5 text-lg text-gray-500'>
            <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
            <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
            <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
            <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
          </div>
        </div>
        {/* ============ LogoIcon End here ============== */}
        {/* ============ LocateUs Start here ============ */}
        <div>
          <h2 className='text-2x1 font-semibold text-white mb-4'>Locate us</h2>
          <div className='text-base flex flex-col gap-2'>
              <p>Dumitru-Vlad-Cristian</p>
              <p>Phone: 0724 699 867</p>
              <p>e-mail: dumitruvladut@yahoo.com</p>
              <p>Copyright @ Dumitru Vlad </p>
        </div>
        </div>
        {/* ============ LocateUs End here ============== */}
        {/* ============ Profile Start here ============= */}
        <div>
        <h2 className='text-2x1 font-semibold text-white mb-4'>Profile</h2>
        <div className='flex flex-col gap-2 text-base'>
          <p className='flex items-center gap-3 hover:text-white duration 300 cursor-pointer'>
          <span>
            <BsPersonFill />
          </span>{" "}
          my account
        </p>
          <p className='flex items-center gap-3 hover:text-white duration 300 cursor-pointer'>
          <span>
            <BsPaypal />
          </span>{" "}
          Checkout
        </p>
          <p className='flex items-center gap-3 hover:text-white duration 300 cursor-pointer'>
          <span>
            <MdLocationOn />
          </span>{" "}
          Order Tracking
        </p>
          <p className='flex items-center gap-3 hover:text-white duration 300 cursor-pointer'>
          <span>
            <FaHome />
          </span>{" "}
          Help & Support
        </p>
        </div>
        </div>
        {/* ============ LogoIcon End here ============== */}
        {/* ============ Subscribe Start here =========== */}
        <div className='flex flex-col justify-center'>
          <input
           className='bg-transparent border px-4 py-2 text-sm'
           placeholder='e-mail'
            type="text">
          </input>
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>
            Subscribe
            </button>
        </div>
        {/* ============ LogoIcon End here ============== */}
      </div>
    </div>
  )
}

export default Footer