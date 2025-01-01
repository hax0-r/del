import { SCHOOL_VIEW } from "@/Data/Data"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa"

const SchoolView = () => {
    return (
        <>
            {
                SCHOOL_VIEW.map((item, index) => (
                    <div key={index} className="w-full relative group  md:h-64 h-56 ">
                        <Image src={item.img} alt="slider" className="rounded-lg object-cover h-full overflow-hidden " />
                        <div className="absolute top-0 left-0 scale-0 group-hover:scale-100 transition-all duration-500 w-full h-full bg-[#001a5799] rounded-lg text-white flex flex-col p-5 justify-end ">
                            <h2 className="font-semibold text-left text-2xl">{item.heading}</h2>
                            <p className="text-center px-5 py-3">{item.para}</p>
                            <div className="flex items-end justify-end">
                                <button className="bg-white  cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  w-[2.8rem] h-[2.8rem] flex items-center justify-center rounded-full text-xl text-zinc-400"><FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SchoolView