
import "./App.css";
import "./css/stlylse.css";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    // Scrolls the window 70px from the top with smooth animation
    window.scroll({
      top: 70,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar  />
      <Home />
    </>
  );
}

export default App;
