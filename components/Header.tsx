import Container from './Container'
import React from 'react'
import Logo from './Logo'
import {IoMdCart} from "react-icons/io"
import {FiSearch} from "react-icons/Fi"
import {AiOutlineUser} from "react-icons/ai"
import { FaDonate } from "react-icons/fa";

 
const Header = () => {
  return (
    <div className="bg-bodyColor h-20 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-pink-600 group">
            <FiSearch className="text-gray-500 group-focus-within:text-darkText-darkText duration-200" />
            <input
              type="text"
              placeholder='Search for products'
              className="placeholder:text-sm flex-1 outline-none"
            />
        </div>
        <a href="https://www.sanity.io/login?origin=https%3A%2F%2Fwww.sanity.io%2Fmanage" rel='noopener' target='_blank'>
            <div className="bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-pink-500 duration-200 hover:scale-105 ease-in duration-300">
                <AiOutlineUser className="text-2xl" />
                <p className="text-sm font-semibold">Login</p>
            </div>
        </a>
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[2.5px] border-black hover:border-pink-600 duration-200 relative hover:scale-105 ease-in duration-300">
            <IoMdCart className="text-2xl" />
            <p className="text-sm font-semibold">$0.00</p>
            <span className="bg-white text-pink-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                0
            </span>
        </div>
        <div className="bg-bgLight text-gray-500 flex items-center justify-center p-2.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-pink-500 duration-200 px-5 hover:scale-105 ease-in duration-300">
        <FaDonate className="text-2xl" />
        </div>
      </Container>
    </div>
  )
}

export default Header
