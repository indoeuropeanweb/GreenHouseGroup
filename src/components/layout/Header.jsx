"use client"
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(hidden);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
     } else {
    document.body.style.overflow = '';
  }

   return () => {
    document.body.style.overflow = '';
  };
}, [isOpen]);

  return (
    <div className={`flex justify-center items-center`}>
      <nav className={`w-[95%] px-5 rounded-xl z-40 h-26 card fixed mx-auto top-2 transition-transform duration-300 shadow flex justify-between bg-[#f8fffc99] ${hidden ? "-translate-y-full top-0": ""}`}>
      <div className='w-36'>
         <img className='w-100' src='../../images/navlogo.png' alt='Company Logo' />
      </div>
     <ul className='hidden justify-center items-center gap-6 lg:flex'>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/">Home</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/about">About</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/homestay">HomeStay</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/inventory">Inventory</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/gallery">Gallery</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/nearby">Nearby</Link></li>
        <li className='font-semibold'><Link className='text-xl lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/blogs">Blogs</Link></li>
       </ul> 
       <div className='h-full flex justify-center items-center lg:hidden cursor-pointer'>{!isOpen && <RiMenu3Fill className='text-2xl' onClick={() => setIsOpen(prev => !prev)}  />}</div>
      </nav>
      {isOpen && <div className='h-screen w-full backdrop-blur-[2px] bg-black/70 backdrop-saturate-100 border-transparent z-50 flex justify-center items-center relative overflow-hidden'>
      <div className='absolute right-10 top-7 border border-gray-400 rounded-full p-1'><RxCross2 className='text-2xl text-white' onClick={() => setIsOpen(prev => !prev)}/></div>
      <ul className='flex flex-col justify-center items-center gap-7'>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="">Home</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/about">About</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/homestay">HomeStay</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/inventory">Inventory</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/gallery">Gallery</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/nearby">Nearby</Link></li>
        <li className='font-semibold'><Link className='text-xl text-white lg:text-gray-600 hover:text-green-500 transition ease-in-out delay-150 duration-150 font-[sans] font-medium cursor-pointer uppercase' href="/blogs">Blogs</Link></li>
       </ul> 
      </div>}
    </div>
  )
}

export default Header