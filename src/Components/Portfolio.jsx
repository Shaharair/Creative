import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import PortEE from "../assets/port.png"
import PortKK from "../assets/port1.png"
import PortJJ from "../assets/port2.png"
import PortHH from "../assets/port3.png"
import PortBB from "../assets/port4.png"
import PortNN from "../assets/port5.png"

const Portfolio = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Inter font-bold lg:text-[40px] text-[30px] text-[#181818] text-center lg:mt-[100px] mt-[30px]">Our Work Portfolio</h3>
                <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:pr-[350px] lg:ml-[300px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="flex items-center justify-between lg:mt-[60px] mt-[30px] flex-wrap">
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden">
                        <img className="w-[300px]" src={PortEE} alt="port" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden">
                        <img className="w-[300px]" src={PortKK} alt="port1" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden mt-[15px] lg:mt-0">
                        <img className="w-[300px]" src={PortJJ} alt="port2" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden mt-[15px] lg:mt-0">
                        <img className="w-[300px]" src={PortHH} alt="port3" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between lg:mt-[20px] mt-[15px] flex-wrap">
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden">
                        <img className="w-[300px]" src={PortBB} alt="port4" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden">
                        <img className="w-[300px]" src={PortNN} alt="port5" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden mt-[15px] lg:mt-0">
                        <img className="w-[300px]" src={PortEE} alt="port" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[24%] w-[48%] relative group overflow-hidden mt-[15px] lg:mt-0">
                        <img className="w-[300px]" src={PortKK} alt="port2" />
                        <div className="bg-[#5956E8] w-[230px] rounded-[10px] py-[10px] absolute top-[250px] left-[-250px] group-hover:left-[35px] duration-700 ease-in-out">
                            <h3 className="font-Inter font-semibold text-[24px] text-white text-center">Graphic Design</h3>
                            <div className="flex items-center gap-4 text-[18px] text-white">
                                <p className="font-Inter font-medium text-[18px] text-white  ml-[50px]">See Details</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio