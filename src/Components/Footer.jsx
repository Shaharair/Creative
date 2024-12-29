import React from 'react'
import LogoEE from "../assets/logo.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-[#5956E81A] lg:mt-[100px] mt-[30px] lg:py-[100px] py-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between items-center lg:items-start flex-wrap">
                    <div className="lg:w-[35%] w-[48%]">
                        <img src={LogoEE} alt="logo" />
                        <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] mt-[20px] lg:pr-[100px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className="flex items-center gap-4 lg:mt-[30px] mt-[20px]">
                            <div className="text-[18px] text-[#33CCFF] border-2 border-[white] w-[60px] h-[60px] rounded-full leading-[60px] pt-[20px] pl-[20px] hover:bg-white hover:text-black duration-500 ease-in-out">
                                <FaFacebookF />
                            </div>
                            <div className="text-[18px] text-[#33CCFF] border-2 border-[white] w-[60px] h-[60px] rounded-full leading-[60px] pt-[20px] pl-[20px] hover:bg-white hover:text-black duration-500 ease-in-out">
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[15%] w-[48%]">
                        <ul>
                            <li className="font-Inter font-semibold lg:text-[24px] text-[18px] text-[#181818]">Company</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">About Us</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Work</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Latest News</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Careers</li>
                        </ul>
                    </div>
                    <div className="lg:w-[15%] w-[48%] mt-[20px] lg:mt-0">
                        <ul>
                            <li className="font-Inter font-semibold lg:text-[24px] text-[18px] text-[#181818]">Product</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Prototype</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Plans & Pricing</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Customers</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Integrations</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%] mt-[20px] lg:mt-0">
                            <ul>
                                <li className="font-Inter font-semibold lg:text-[24px] text-[18px] text-[#181818]">Support</li>
                                <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Help Desk</li>
                                <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Sales</li>
                                <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Become a Partner</li>
                                <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">Developers</li>
                            </ul>
                    </div>
                    <div className="lg:w-[15%] w-[48%] mt-[20px] lg:mt-0">
                        <ul>
                            <li className="font-Inter font-semibold lg:text-[24px] text-[18px] text-[#181818]">Contact</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">524 Broadway , NYC</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] pt-2">+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer