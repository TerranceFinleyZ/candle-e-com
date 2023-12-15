"use client";
import React from 'react'
import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import BannerText from './BannerText';


const Banner = () => {
  const NextArrow = (props: any) => {
    const {onClick} = props
    return(
      <div
        className="p-3 bg-slate-100 hover:text-pink-500 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify center z-20 absolute Left-5 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    )
  };
  const PrevArrow = (props: any) => {
    const {onClick} = props
    return(
      <div
        className="p-3 bg-slate-100 hover:text-pink-500 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify center z-20 absolute right-5 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    )
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
      <div className="w-full h-full relative">
        <img 
        src={"altri2yb.png"} alt="" className="w-full h-full relative" />
        <BannerText title="Salt & Light" />
      </div>
      <div className="w-full h-full relative">
        <img
        src={"2p85pbqv.png"} alt="" className="w-full h-full relative" />
        <BannerText title="Shop The Season" />
      </div>
      <div className="w-full h-full relative">
        <img 
        src={"g0h61v8b.png"} alt="" className="w-full h-full relative" />
        <BannerText title="New Area Of Aroma" />
      </div>
    </Slider>
    <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  )
}

export default Banner
