import React, { useState } from 'react'
import LogoRR from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    let [show, setShow] = useState(false)

    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="w-[30%]">
                        <img src={LogoRR} alt="logo" />
                    </div>
                    <div className="w-[60%]">
                        <ul className={`lg:flex items-center gap-[50px] absolute top-[60px] left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[gray] w-[250px] h-[300px] text-center py-[70px]" : "left-[-200px]"}`}>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] lg:text-[#181818] text-white hover:text-[#5956E8] duration-500 ease-in-out uppercase">Home</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] lg:text-[#181818] text-white hover:text-[#5956E8] duration-500 ease-in-out uppercase py-2 lg:py-0">About</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] lg:text-[#181818] text-white hover:text-[#5956E8] duration-500 ease-in-out uppercase">Service</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] lg:text-[#181818] text-white hover:text-[#5956E8] duration-500 ease-in-out uppercase py-2 lg:py-0">Blog</li>
                            <li className="font-Inter font-semibold lg:text-[18px] text-[14px] lg:text-[#181818] text-white hover:text-[#5956E8] duration-500 ease-in-out uppercase">Contact</li>
                        </ul>
                    </div>
                    <div className="lg:w-[10%]">
                        <button className="font-Inter font-semibold lg:text-[18px] text-[14px] text-[#181818] border-2 border-[#5956E8] lg:w-[170px] w-[130px] lg:h-[60px] h-[50px] rounded hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out uppercase">Contact Us</button>
                    </div>
                    <div onClick={() => setShow(!show)} className="lg:hidden absolute right-[30px] top-[60px] text-[24px]">
                        {show == true ? <RxCross2/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar