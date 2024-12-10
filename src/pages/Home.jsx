
//import { useState } from "react";
import CorouselIntro from "../components/CorouselIntro";
import Gallary from "../components/gallary";
//const image = require("../images/Backgrounds/parallax1.jpg")

function Home() {
 // const [currentSection,setSection]=useState("kids")
  return (
    <div>
      <CorouselIntro />
      <div className="back">

        </div>
        <div className="flex justify-center h-fit text-center">
        <div className="shadow-2xl w-fit -translate-y-1/2 midle-text-container" >
        <div className="p-4 md:p-6 lg:p-8">
  <span className="block text-lg md:text-2xl lg:text-3xl font-bold">Your Vision, My Focus</span>
  <span className="block text-sm md:text-3xl, lg:text-xl text-blue-700">2015-Present
    
  </span>
</div>

        </div>
        </div>
        <div className="w-full flex justify-center">
  <ul className="w-4/5 flex flex-wrap justify-between font-bold text-lg md:text-xl lg:text-2xl catogory-list px-9 py-2">
    <li>Wedding</li>
    <li>Kids</li>
    <li>Nature</li>
    <li>City</li>
  </ul>
</div>
 <Gallary category={"kids"}/> 
{/* <img src={image}/> */}


    </div>
  );
}

export default Home;
