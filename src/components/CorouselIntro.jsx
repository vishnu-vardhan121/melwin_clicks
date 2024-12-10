import  { useEffect, useState } from "react";
import logo from "../images/logo/m-logo1.png"
function CorouselIntro() {
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prevCycle) => (prevCycle < 3 ? prevCycle + 1 : 1));
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   window.scroll({
  //     top: 0.5,
  //     behavior: "smooth",
  //   });
  //   console.log("HOME SCROLL_______Did Mount");
  // }, []); // Runs only once

  // useEffect(() => {
  //   // Mimics componentDidUpdate
  //   window.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   console.log("HOME SCROLL_______");
  // });

  return (
    <div className={`corousalintro${cycle}  flex justify-center items-center`}>
      <div className="corousildiv absolute md:left-1/4 ">
        <div className="  p-4 sm:p-6 md:p-8 lg:p-10 xl:p-16">
         <img src={logo} className="h-60"/>
        
        </div>
      </div>
    </div>
  );
}

export default CorouselIntro;
