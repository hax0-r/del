"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/Assets/logo.jpg'
import Link from 'next/link'
import { GrSearch } from "react-icons/gr";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)
    return (
        <>

            <div className="bg-white border-b sticky top-0 p-4 w-full z-40">
                <div className="flex relative items-center justify-between max-w-7xl w-full mx-auto">
                    <FaBars onClick={() => setNavbar(!navbar)} className='text-zinc-700 text-xl md:hidden transition-all duration-500 hover:text-black cursor-pointer' />
                    <Link href="/">
                        <Image src={logo} alt="logo" className='md:w-20 w-14' />
                    </Link>
                    {/* links */}
                    <ul className='md:flex hidden items-center gap-7 text-zinc-700 uppercase font-medium'>
                        <li><Link className='transition-all duration-500 hover:text-black' href="/">Home</Link></li>/
                        <li><Link className='transition-all duration-500 hover:text-black' href="/">About Us</Link></li>/
                        <li><Link className='transition-all duration-500 hover:text-black' href="/form">Download Form</Link></li>/
                        <li><Link className='transition-all duration-500 hover:text-black' href="/">Services</Link></li>/
                        <li><Link className='transition-all duration-500 hover:text-black' href="/">Contact</Link></li>
                    </ul>
                    <GrSearch onClick={() => setIsOpen(!isOpen)} className='text-zinc-700 text-xl transition-all duration-500 hover:text-black cursor-pointer' />

                    {/* search */}

                    {
                        isOpen && (
                            <div className="bg-white p-2 rounded-lg max-w-[17.8rem] fadeIn absolute md:top-16 top-14 md:right-5 right-2 z-10">
                                <div className=" flex items-center">
                                    <input type="text" placeholder='Enter Your Search...' className='p-3 border-r-0 rounded-l-lg focus:border-zinc-300 border' />
                                    <div className="w-12 h-12 rounded-r-lg flex items-center bg-[#41c4ff]  justify-center">
                                        <GrSearch className='text-white text-xl transition-all duration-500 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {/* responsive Navbar */}

                    <div className={`absolute w-full z-20 top-[4.5rem] overflow-hidden transition-all duration-500 ${navbar ? "h-72" : "h-0"} `}>
                        <ul className='md:hidden border border-t-0 w-full max-w-[95%] mx-auto flex-col flex items-center bg-white text-[#555555] font-medium'>
                            <li className='w-full text-center'><Link className='transition-all border-b w-full p-4 block  duration-500 hover:text-black' href="/">Home</Link></li>
                            <li className='w-full text-center'><Link className='transition-all border-b w-full p-4 block  duration-500 hover:text-black' href="/">About Us</Link></li>
                            <li className='w-full text-center'><Link className='transition-all border-b w-full p-4 block  duration-500 hover:text-black' href="/form">Download Form</Link></li>
                            <li className='w-full text-center'><Link className='transition-all border-b w-full p-4 block  duration-500 hover:text-black' href="/">Services</Link></li>
                            <li className='w-full text-center'><Link className='transition-all p-4 block  duration-500 hover:text-black' href="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar