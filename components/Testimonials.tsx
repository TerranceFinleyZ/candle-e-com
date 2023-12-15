"use client";
import { RiStarSFill } from "react-icons/ri";

    import React from 'react'
    import Slider from "react-slick";
    import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
    import BannerText from './BannerText';
    
    
    const Testimonials = () => {
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
          <section className="mt-9 mb-28 max-2-[50rem] text-center sm:mb-0">
      <p className="flex items-center justify-center uppercase text-3xl tracking-widest text-pink-500 gap-x-1"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></p>
      <div className="flex items-center justify-center">
        <div>
          <img src={"https://m.cbhomes.com/a/32/153336/C86LyxZed2sv/original.jpg"} alt="test" width="192" height="192" className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-105 ease-in duration-100" />
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">"Your more than a business. Your a movement for good"</p>
      <p className="mb-20 mt-4 px-4 text-1xl !leading-[1.5] sm:text-2xl font-serif">- Lenna S.</p>
    </section>
    <section className="mt-9 mb-28 max-2-[50rem] text-center sm:mb-0">
      <p className="flex items-center justify-center uppercase text-3xl tracking-widest text-pink-500 gap-x-1"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></p>
      <div className="flex items-center justify-center">
        <div>
          <img src={"https://img.tpt.cloud/nextavenue/uploads/2021/12/reason-older-workers-hired.inside.601x800.jpg"} alt="test" width="192" height="192" className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-105 ease-in duration-100" />
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">"I only buy from Salt & Light, there always reliable"</p>
      <p className="mb-20 mt-4 px-4 text-1xl !leading-[1.5] sm:text-2xl font-serif">- Karen J.</p>
    </section>
    <section className="mt-9 mb-28 max-2-[50rem] text-center sm:mb-0">
      <p className="flex items-center justify-center uppercase text-3xl tracking-widest text-pink-500 gap-x-1"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></p>
      <div className="flex items-center justify-center">
        <div>
          <img src={"https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/kerry-hannon-d7fdc0d9"} alt="test" width="192" height="192" className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:scale-105 ease-in duration-100" />
        </div>
      </div>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">"Got my candles 2 days after ordering very kind and respectiful business"</p>
      <p className="mb-20 mt-4 px-4 text-1xl !leading-[1.5] sm:text-2xl font-serif">- Ella L.</p>
    </section>
        </Slider>
        </div>
  )
}

export default Testimonials
