import React from 'react'
import BannerEE from "../assets/banner.png"

const Banner = () => {
  return (
    <section className="bg-[#5956E8] lg:py-[70px] py-[30px] mt-[50px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex justify-between">
                <div className="lg:w-[50%] w-full">
                    <h3 className="font-Inter font-bold lg:text-[65px] text-[30px] text-white lg:mt-[50px]">We Are Digital Product Design Agency</h3>
                    <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-white pt-2 lg:pr-[100px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <div className="lg:mt-[50px] mt-[30px]">
                        <button className="font-Inter font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[white] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[white] hover:text-black duration-500 ease-in-out">Get Started</button>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full mt-[50px] lg:mt-0">
                    <img src={BannerEE} alt="banner" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner