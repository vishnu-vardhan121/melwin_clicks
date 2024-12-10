import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import {  useState } from "react";
import logo from "../images/logo/2R.png"
import intsalogo from "../images/logo/insta.png"
function Navbar() {
  const { scrollY } = useScroll();
  const [navState, setNavState] = useState(false);

  useMotionValueEvent(scrollY, "change");
  scrollY.on("change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  });
  // useEffect(() => {
  //   console.log(scrollY);
  //   const unsub = scrollY.on("change", (latest) => {
  //     console.log(latest);

  //     return () => unsub();
  //   });
  // }, [scrollY]);
  return (
    <motion.nav
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-100%" },
      }}
      animate={navState ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "backInOut" }}
      className="sticky top-0 flex z-10 bg-slate-50 h-12  justify-between items-center"
    >
      <span className="flex items-center"><img src={logo} className="h-12 w-12"/>
    
  
    <span className="logo">MELWIN CLICKS</span></span>
 
      <ul className="flex list-none justify-end mr-2 space-x-5 ">
        <li className="home"><a href="https://www.instagram.com/melwin_clicks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src={intsalogo} className="w-6 hover:cursor-pointer"/></a></li>
        <li className="about">About</li>
        <li className="contact">Contact</li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
