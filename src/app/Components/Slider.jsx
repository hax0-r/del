"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../public/Assets/Home/slider1.jpg"
import img2 from "../../../public/Assets/Home/slider (1).png"
import img3 from "../../../public/Assets/Home/slider (2).jpg"
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


const Slider = () => {
    return (
        <>
            <div className=" w-full ">
                <Swiper className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
                            <Image src={img1} alt="slider" className="w-full object-cover absolute h-full top-0 left-0" />
                            <div className="relative z-10 flex items-center justify-center flex-col">
                                <p className="text-white text-center text-lg font-medium">Join the train of entrepreneur</p>
                                <h2 className="font-bold text-center py-6 md:text-6xl text-3xl text-[#109de4]">TO ESCAPE POVERTY</h2>
                                <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">About Us</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
                            <Image src={img2} alt="slider" className="w-full object-cover absolute h-full top-0 left-0" />
                            <div className="w-full h-full absolute top-0 left-0 bg-[#0000007d]"></div>
                            <div className="relative z-10 flex items-center justify-center flex-col">
                                <button className="bg-white border font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">About Us</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative md:min-h-[95vh] h-[35vh] flex items-center justify-center">
                            <Image src={img3} alt="slider" className="w-full object-cover absolute h-full top-0 left-0" />
                            <div className="w-full h-full absolute top-0 left-0 bg-[#0000007d]"></div>
                            <div className="relative z-10 flex items-center justify-center flex-col">
                                <p className="text-white text-center text-lg font-medium">SKILL UP FOR INCOME</p>
                                <h2 className="font-bold text-center py-6 md:text-6xl text-3xl text-[#fff]">CREATE SKILLS AND EARN INCOME</h2>
                                <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">About Us</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Slider