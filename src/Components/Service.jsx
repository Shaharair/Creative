import React from 'react'
import { MdFormatLineSpacing } from "react-icons/md";
import { LuAlignHorizontalDistributeEnd, LuCopyMinus } from "react-icons/lu";
import { GrObjectUngroup } from "react-icons/gr";
import { FaObjectUngroup } from "react-icons/fa6";
import { RxTransform } from "react-icons/rx";


const Service = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Inter font-bold lg:text-[40px] text-[30px] text-[#181818] text-center lg:mt-[100px] mt-[30px]">Our Services</h3>
                <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:pr-[350px] lg:ml-[300px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px]">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <MdFormatLineSpacing />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">UI/UX Design</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px] mt-[30px] lg:mt-0">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <LuAlignHorizontalDistributeEnd />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">Web Development</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px] mt-[30px] lg:mt-0">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <LuCopyMinus />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">Digital Marketing</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <div className="lg:flex items-center justify-between mt-[30px]">
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px]">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <GrObjectUngroup />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">Graphic Design</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px] mt-[30px] lg:mt-0">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <FaObjectUngroup />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">Web Design</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="lg:w-[32%] w-full rounded-[20px] shadow lg:py-[50px] py-[30px] mt-[30px] lg:mt-0">
                        <div className="text-[24px] lg:ml-[40px] ml-[30px] border-2 border-[#5956E8] w-[60px] h-[60px] rounded-[10px] leading-[60px] pt-[17px] pl-[17px] hover:bg-[#5956E8] hover:text-white duration-500 ease-in-out">
                            <RxTransform />
                        </div>
                        <h3 className="font-Inter font-bold lg:text-[24px] text-[18px] text-[#181818] lg:ml-[40px] ml-[30px] lg:mt-[50px] mt-[30px]">Motion Design</h3>
                        <p className="font-Inter font-normal lg:text-[16px] text-[14px] text-[#181818] lg:ml-[40px] ml-[30px] mt-[10px] lg:pr-[100px] pr-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service