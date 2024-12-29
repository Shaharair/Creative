import React from 'react'
import { FaStar } from "react-icons/fa";
import TestRR from "../assets/test.png"

const Testimonial = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Inter font-bold lg:text-[40px] text-[30px] text-[#181818] lg:mt-[100px] mt-[30px] lg:pr-[600px]">We Care About Our Customer Experience Too</h3>
                <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:pr-[700px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full shadow py-[50px] rounded-[20px]">
                        <img className="lg:ml-[40px] ml-[30px]" src={TestRR} alt="test" />
                        <div className="flex items-center lg:gap-4 gap-2 text-[24px] text-[#FBBF25] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[20px] lg:pr-[80px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className="font-Inter font-semibold lg:text-[18px] text-[16px] text-[#181818] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">Mahid Ahmed</h3>
                        <h5 className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px]">UX Designer</h5>
                    </div>
                    <div className="lg:w-[32%] w-full shadow py-[50px] rounded-[20px] mt-[30px] lg:mt-0">
                        <img className="lg:ml-[40px] ml-[30px]" src={TestRR} alt="test" />
                        <div className="flex items-center lg:gap-4 gap-2 text-[24px] text-[#FBBF25] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[20px] lg:pr-[80px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className="font-Inter font-semibold lg:text-[18px] text-[16px] text-[#181818] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">Mahid Ahmed</h3>
                        <h5 className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px]">UX Designer</h5>
                    </div>
                    <div className="lg:w-[32%] w-full shadow py-[50px] rounded-[20px] mt-[30px] lg:mt-0">
                        <img className="lg:ml-[40px] ml-[30px]" src={TestRR} alt="test" />
                        <div className="flex items-center lg:gap-4 gap-2 text-[24px] text-[#FBBF25] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[20px] lg:pr-[80px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className="font-Inter font-semibold lg:text-[18px] text-[16px] text-[#181818] lg:mt-[30px] mt-[20px] lg:ml-[40px] ml-[30px]">Mahid Ahmed</h3>
                        <h5 className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px]">UX Designer</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial