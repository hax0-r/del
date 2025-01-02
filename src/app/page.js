"use client";
import { CARD_DATA, wyChooseUs } from "@/Data/Data";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Slider from "./Components/Slider";
import Card from "./Components/Card";
import bgBlue from "../../public/Assets/Home/bgBlue.jpg";
import bgContact from "../../public/Assets/Home/slider1.jpg";
import faq from "../../public/Assets/Home/faq.jpg";
import SchoolView from "./Components/SchoolView";
import Accordion from "./Components/Faq";
import Footer from "./Components/Footer";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState(false);
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <ScrollToTop />

      <div className="bg-[#333333] p-5 md:py-12 w-full py-8">
        <div className="flex items-center text-center justify-between md:flex-row flex-col gap-4 max-w-7xl w-full mx-auto">
          <h2 className="uppercase text-white font-bold text-2xl">OUR SCHOOL</h2>
          <div className="w-1 h-6 bg-zinc-400 rounded-full md:block hidden"></div>
          <p className="text-white">A supermarket of skills for all youths in Nigeria.</p>
          <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">Other Services</button>
        </div>
      </div>



      <h2 className="font-bold text-[1.7rem] px-4 md:text-[2.5rem] md:pt-16 pt-12 text-center">OFATECH OPERATION</h2>
      <div className="w-10 mt-3 h-1 rounded-full bg-zinc-400 mx-auto"></div>
      <div className="md:pt-16 max-w-6xl w-full mx-auto p-4 pt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-14 ">
        {
          CARD_DATA.map((data, index) => (
            <div key={index}>
              <Card className={true} image={data.img} cardHeader={data.heading} cardBody={data.para} />
            </div>
          ))
        }
      </div>

      <div
        style={{ background: `linear-gradient(#0a364fc6,#0a364fc6),url(${bgContact.src}) center/cover fixed` }}
        className="bgContactSection md:py-20 py-8 w-full mt-10">
        <div className="max-w-7xl w-full mx-auto gap-5 flex items-center md:flex-row flex-col px-4 justify-center">
          <div className="md:max-w-[50%] w-full">
            <h2 className="font-bold text-[1.7rem] text-white md:text-[2.5rem] md:pt-16 pt-12 ">CONTACT US</h2>
            <div className="w-10 mt-2 h-1 rounded-full bg-zinc-300 "></div>
            <p className="mt-6 text-zinc-300 text-center">
              We're to assist you! Whether you have questions about our programs, need guidance, or require technical support, feel free to reach out.
              <br /><br />
              Our team is dedicated to providing the help you need for a smooth and enriching experience. Simply fill out the form, and we'll get back to you as soon as possible.
              <br /><br />
              <i>Ofada Technical School</i></p>
          </div>
          <div className="md:max-w-[50%] w-full">
            <form className="bg-white rounded-lg p-5 grid md:grid-cols-2 grid-cols-1 gap-5 max-w-[30rem] w-full mx-auto md:py-8">
              <input type="text" placeholder="Name, Lastname *" name="name" required className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <input type="number" placeholder="Mobile Phone *" required name="phone" className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <input type="email" placeholder="Email Address *" required name="email" className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <select name="course" id="course" className="py-3 text-zinc-500 border-b border-zinc-300 focus:border-zinc-400">
                <option value="Select Course " className="">Choose Your Service</option>
                <option value="Select Course " className="">Technical Support</option>
                <option value="Select Course " className="">Course on offer</option>
                <option value="Select Course " className="">Fee enquiries</option>
                <option value="Select Course " className="">others</option>
              </select>
              <textarea name="message" id="message" rows="3" placeholder="Message" className="py-3 border-b md:col-span-2 resize-none border-zinc-300 focus:border-zinc-400"></textarea>
              <button className="hover:bg-black  font-medium px-7 md:col-span-2 cursor-pointer transition-all duration-500 bg-[#41c4ff] text-white  py-4 rounded-lg uppercase">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>




      <h2 className="font-bold text-[1.7rem] px-4 md:text-[2.5rem] md:pt-16 pt-12 text-center">SCHOOL VIEW</h2>
      <div className="w-10 mt-3 h-1 rounded-full bg-zinc-400 mx-auto"></div>
      <p className="text-zinc-700 max-w-6xl p-5 text-center mx-auto ">With different departments, Ofada Technical School focuses on providing specialized education and practical skills in various trades and vocations.
        They include Engineering,Information Technology, Fashion Designing, Chemical and Allied etc.</p>
      <div className="md:pt-10 max-w-7xl w-full mx-auto p-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:gap-5">
        <SchoolView />
      </div>
      <div className="flex justify-center my-7">
        <button className="hover:bg-black  font-medium px-10 py-4 cursor-pointer transition-all duration-500 bg-[#41c4ff] text-white   rounded-lg uppercase">VIEW MORE</button>
      </div>




      <div
        style={{ background: `linear-gradient(#0a364fc6,#0a364fc6),url(${faq.src}) center/cover fixed` }}
        className="bgContactSection md:pt-20 relative pt-8 w-full mt-10">
        <div className="h-40 w-full absolute bg-white bottom-0 left-0"></div>
        <h2 className="font-bold text-[1.7rem] text-white md:text-[2.5rem] text-center md:pt-16 pt-12 ">Faq’s</h2>
        <div className="w-10 mt-2 h-1 rounded-full bg-zinc-300 mx-auto"></div>
        <p className="mt-6 text-zinc-300 text-center">
          Here are the common FAQs</p>
        <div className="max-w-7xl w-full mx-auto md:mt-14 mt-8 grid md:grid-cols-2 z-10 relative grid-cols-1 px-4 justify-center">
          <div className="relative flex items-center justify-center">

            {
              !video ? (
                <>
                  <Image src={faq} alt="img" className="w-full h-[26rem]" />
                  <div onClick={() => setVideo(true)} className="w-16 h-16 cursor-pointer bg-white flex items-center justify-center rounded-full absolute">
                    <FaPlay className="" />
                  </div>
                </>
              ) : (
                <video onClick={() => setVideo(false)} className="h-[26rem] bg-white object-cover" autoPlay muted loop>
                  <source src="/Assets/Home/video.mp4" type="video/mp4" />
                </video>
              )
            }

          </div>
          <div className=" bg-white h-full flex items-center justify-center">
            <Accordion />
          </div>
        </div>
      </div>






      <h2 className="font-bold text-[1.7rem] px-4 md:text-[2.5rem] md:pt-20 pt-12 text-center">Why choose us?</h2>
      <div className="w-10 mt-3 h-1 rounded-full bg-zinc-400 mx-auto"></div>
      <div className="md:pt-16 max-w-7xl w-full mx-auto p-4 pt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-14 ">
        {
          wyChooseUs.map((data, index) => (
            <Card key={index} image={data.img} cardHeader={data.heading} cardBody={data.para} />
          ))
        }
      </div>

      <div style={{ background: `linear-gradient(rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.3)),url(${bgBlue.src}) center/cover` }} className=" bg-no-repeat w-full md:mt-16 mt-8">
        <h2 className="text-center font-bold md:text-5xl text-3xl px-4 !leading-tight md:py-16 py-10">Technical Education in 2024</h2>
      </div>

      <Footer />

    </div>
  );
}
