import Image from "next/image"
import Link from "next/link"
import logo from '../../../public/Assets/logo.jpg'
import school1 from "../../../public/Assets/Home/school1.jpg"
import school2 from "../../../public/Assets/Home/school2.jpg"
import school3 from "../../../public/Assets/Home/school3.jpg"
import school4 from "../../../public/Assets/Home/school4.jpg"
import school5 from "../../../public/Assets/Home/school5.jpg"
import school6 from "../../../public/Assets/Home/school6.jpg"
import { GiDirectionSigns } from "react-icons/gi";
import { LuMail } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa"

const images = [
    { src: school1, alt: 'School 1' },
    { src: school2, alt: 'School 2' },
    { src: school3, alt: 'School 3' },
    { src: school4, alt: 'School 4' },
    { src: school5, alt: 'School 5' },
    { src: school6, alt: 'School 6' },
];

const Footer = () => {
    return (
        <div className="bg-[#333333] p-4 md:pt-12 w-full pt-8">
            <div className="max-w-7xl w-full mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div className="">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </Link>
                    <p className="text-zinc-200 py-5">A supermarket of skills to learn and to earn an income.</p>
                    <div className="text-lg text-zinc-300  flex items-center gap-4">
                        <FaPinterest className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaLinkedinIn className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaGooglePlusG className=" cursor-pointer transition-all duration-500 hover:text-white text-2xl" />
                        <FaFacebookF className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaTwitter className=" cursor-pointer transition-all duration-500 hover:text-white" />
                    </div>
                </div>
                <div className="text-white lg:pl-20">
                    <h2 className="font-semibold text-2xl">EXPLORE</h2>
                    <ul className="pt-5 space-y-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/form">Download Form</Link></li>
                        <li><Link href="/">Services</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="text-white ">
                    <h2 className="font-semibold text-2xl">Gallery</h2>
                    <div className="pt-5 grid grid-cols-3 gap-1.5">
                        {
                            images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-16 rounded-lg object-cover"
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="text-white lg:pl-5">
                    <h2 className="font-semibold text-2xl">CONTACT</h2>
                    <div className="flex items-start gap-2 mt-5">
                        <GiDirectionSigns className="w-20 text-2xl" />
                        <p>Papalanto Road, Asa Baala/Mosadomi Village, Ofada, Obafemi-Owode L/g Ogun State.</p>
                    </div>
                    <div className="flex items-start gap-2 mt-5">
                        <LuMail className="w-10 text-2xl" />
                        <a href="mailto:ofadatechnicalschool@gmail.com" className="text-balance">ofadatechnicalschool@ gmail.com</a>
                    </div>
                    <div className="flex items-start gap-2 mt-5">
                        <FaPhoneAlt className="w-10 text-xl" />
                        <a href="tel:07071354784">07071354784</a>
                    </div>
                </div>
            </div>

            <p className="text-zinc-200 font-medium text-center border-t pt-4 mt-14">OFATECH © Copyrights 2024 / <span className="font-light">Technical Education</span> / All Rights Reserved.</p>
        </div>
    )
}

export default Footer