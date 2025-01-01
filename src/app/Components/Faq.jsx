"use client";
import { FAQ_DATA } from "@/Data/Data";
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = ({ title, description, index, isOpen, onClick }) => {
    const contentRef = useRef();

    return (
        <li className="border-b border-zinc-400 ">
            <h2
                onClick={onClick}
                className="flex  flex-row justify-between items-center font-medium text-zinc-700 p-4 cursor-pointer"
            >
                <span>{index + 1}. {title}</span>
                <div className="flex items-center gap-2">
                    <IoIosArrowDown className={`transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
                </div>
            </h2>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-500`}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
                }}
            >
                <div className="text-zinc-600">
                    <p className="p-3">{description}</p>
                </div>
            </div>
        </li>
    );
};

const Accordion = () => {
    const [openTab, setOpenTab] = useState(null);

    const toggleTab = (idx) => {
        setOpenTab(openTab === idx ? null : idx);
    };



    return (
        <main className="lg:p-5 bg-white">
            <div className="flex justify-center items-start my-2">
                <div className="w-full max-w-[1000px] my-1">
                    <ul className="flex flex-col rounded-lg overflow-hidden">
                        {FAQ_DATA.map((item, index) => (
                            <div key={index}>
                                <Faq
                                    index={index}
                                    title={item.title}
                                    description={item.description}
                                    isOpen={openTab === index}
                                    onClick={() => toggleTab(index)}
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Accordion;
