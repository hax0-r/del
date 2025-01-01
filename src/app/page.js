import { CARD_DATA } from "@/Data/Data";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Slider from "./Components/Slider";
import Card from "./Components/Card";

export default function Home() {
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
            <Card key={index} className={true} img={data.img} heading={data.heading} para={data.para} />
          ))
        }
      </div>
    </div>
  );
}
