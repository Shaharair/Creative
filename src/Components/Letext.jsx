import React from 'react'
import { FaUser, FaCalendar } from "react-icons/fa";
import LetestRR from "../assets/letest.png"
import LetestKK from "../assets/letest1.png"
import LetestHH from "../assets/letest2.png"

const Letext = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Inter font-bold lg:text-[40px] text-[30px] text-[#181818] text-center lg:mt-[100px] mt-[30px]">Our Letest News</h3>
                <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:pr-[350px] lg:ml-[300px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full shadow rounded pb-[30px]">
                        <img className="lg:w-[370px] lg:ml-[20px] lg:pt-[20px]" src={LetestRR} alt="letest" />
                        <div className="flex items-center gap-[50px]">
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaUser />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">Admin</h4>
                            </div>
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaCalendar />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">07/11/2021</h4>
                            </div>
                        </div>
                        <h3 className="font-Inter font-semibold lg:text-[30px] text-[24px] text-[#181818] lg:ml-[30px] ml-[20px] mt-2">Business Plans That Fit Your Best Blog</h3>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[30px] ml-[20px] mt-[10px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="lg:mt-[30px] mt-[20px]">
                            <button className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#5956E8] lg:ml-[30px] ml-[20px]">Learn More</button>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full shadow rounded pb-[30px] mt-[30px] lg:mt-0">
                        <img className="lg:w-[370px] lg:ml-[20px] lg:pt-[20px]" src={LetestKK} alt="letest1" />
                        <div className="flex items-center gap-[50px]">
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaUser />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">Admin</h4>
                            </div>
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaCalendar />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">07/11/2021</h4>
                            </div>
                        </div>
                        <h3 className="font-Inter font-semibold lg:text-[30px] text-[24px] text-[#181818] lg:ml-[30px] ml-[20px] mt-2">Business Plans That Fit Your Best Blog</h3>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[30px] ml-[20px] mt-[10px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="lg:mt-[30px] mt-[20px]">
                            <button className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#5956E8] lg:ml-[30px] ml-[20px]">Learn More</button>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full shadow rounded pb-[30px] mt-[30px] lg:mt-0">
                        <img className="lg:w-[370px] lg:ml-[20px] lg:pt-[20px]" src={LetestHH} alt="letest2" />
                        <div className="flex items-center gap-[50px]">
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaUser />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">Admin</h4>
                            </div>
                            <div className="flex items-center gap-4 mt-[20px] lg:ml-[30px] ml-[20px] text-[#5D5D5D]">
                                <FaCalendar />
                                <h4 className="font-Inter font-medium lg:text-[18px] text-[14px] text-[#5D5D5D]">07/11/2021</h4>
                            </div>
                        </div>
                        <h3 className="font-Inter font-semibold lg:text-[30px] text-[24px] text-[#181818] lg:ml-[30px] ml-[20px] mt-2">Business Plans That Fit Your Best Blog</h3>
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:ml-[30px] ml-[20px] mt-[10px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="lg:mt-[30px] mt-[20px]">
                            <button className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#5956E8] lg:ml-[30px] ml-[20px]">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Letext