"use client"
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 100) { 
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleScrollToTop}
                    className="hover:bg-black cursor-pointer transition-all duration-500 bg-[#41c4ff] fixed bottom-5 right-5 text-white w-9 h-9 flex items-center justify-center rounded-lg text-xl"
                >
                    <IoIosArrowUp />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
