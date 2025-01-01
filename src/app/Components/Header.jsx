"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

// Flag imports
import us from '../../../public/Home/flags/us.svg';
import de from '../../../public/Home/flags/de.svg';
import es from '../../../public/Home/flags/es.svg';
import fr from '../../../public/Home/flags/fr.svg';
import it from '../../../public/Home/flags/it.svg';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: "English",
        flag: us,
    });

    const languages = [
        { name: "English", flag: us },
        { name: "German", flag: de },
        { name: "Spanish", flag: es },
        { name: "French", flag: fr },
        { name: "Italian", flag: it },
    ];

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false); // Close the dropdown
    };

    return (
        <div>
            <div className="bg-[#000000]">
                <div className="max-w-7xl flex items-center md:flex-row flex-col md:justify-between justify-center gap-3 w-full mx-auto p-4">
                    <div className="flex items-center font-medium gap-6">
                        <a href="tel:07071354784" className="text-white">
                            Phone: 07071354784
                        </a>
                        <div className="relative">
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center gap-5 cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <Image src={selectedLanguage.flag} alt="logo" className="w-6" />
                                    <p className="text-white select-none">{selectedLanguage.name}</p>
                                </div>
                                <IoIosArrowDown className="text-xl text-white" />
                            </div>
                            {isOpen && (
                                <div className="bg-[#000f32] fadeIn w-32 flex-col p-1 flex items-center justify-center z-50 absolute top-10 left-0 rounded-b-lg">
                                    {languages.map((language) => (
                                        <div
                                            key={language.name}
                                            onClick={() => handleLanguageChange(language)}
                                            className="flex w-full cursor-pointer rounded-lg transition-all duration-500 hover:bg-blue-500 p-2 gap-2"
                                        >
                                            <Image src={language.flag} alt={`${language.name} flag`} className="w-6" />
                                            <p className="text-white">{language.name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="text-lg text-zinc-300  flex items-center gap-4">
                        <FaPinterest className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaLinkedinIn className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaGooglePlusG className=" cursor-pointer transition-all duration-500 hover:text-white text-2xl" />
                        <FaFacebookF className=" cursor-pointer transition-all duration-500 hover:text-white" />
                        <FaTwitter className=" cursor-pointer transition-all duration-500 hover:text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;