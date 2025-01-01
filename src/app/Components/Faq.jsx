"use client";
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = ({ title, title2, content, index, isOpen, onClick }) => {
    const contentRef = useRef();

    return (
        <li className="border-b border-zinc-400 ">
            <h2
                onClick={onClick}
                className="flex  flex-row justify-between items-center font-medium text-zinc-700 p-4 cursor-pointer"
            >
                <span>{index + 1}. {title}</span>
                <div className="flex items-center gap-2">
                    <span>{title2}</span>
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
                    <p className="p-3">{content}</p>
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

    const items = [
        {
            title: "What programs do you offer?",
            content:
                "We offer a variety of programs in fields such as IT, skilled trades, entrepreneurship, designed to prepare students for specific careers",
        },
        {
            title: "How long do the programs take to complete",
            content:
                "Programs length vary, typically ranging from a few months, with maximum of three years, depending on the field of study",
        },
        {
            title: "Are there financial aid options available?",
            content:
                "Yes, we offer financial aid options in which one of it inclueds loans to help students after graduation",
        },
        {
            title: "what are the admission requirements?",
            content:
                "Admission requiremnts generally include J.S.S 3 examination certificate for the students willing to seat for NABTEB examination. The form fee is just 10,000 Naira",
        },
        {
            title: "will there be job placement?",
            content:
                "Yes, there will be job placement",
        },
    ];

    return (
        <main className="lg:p-5 bg-white">
            <div className="flex justify-center items-start my-2">
                <div className="w-full max-w-[1000px] my-1">
                    <ul className="flex flex-col rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <Faq
                                key={index}
                                index={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openTab === index}
                                onClick={() => toggleTab(index)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Accordion;
