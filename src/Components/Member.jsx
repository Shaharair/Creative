import React from 'react'
import MemEE from "../assets/meb.png"
import MemGG from "../assets/meb1.png"
import MemDD from "../assets/meb2.png"

const Member = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Inter font-bold lg:text-[40px] text-[30px] text-[#181818] text-center lg:mt-[100px] mt-[30px]">Our Expert Team Member</h3>
                <p className="font-Inter font-medium lg:text-[16px] text-[14px] text-[#181818] lg:pr-[350px] lg:ml-[300px] text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full">
                        <img className="w-[400px]" src={MemEE} alt="" />
                    </div>
                    <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
                        <img className="w-[400px]"  src={MemGG} alt="" />
                    </div>
                    <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
                        <img className="w-[400px]"  src={MemDD} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Member