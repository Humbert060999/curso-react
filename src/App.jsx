import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
import MenuMobile from "./Components/Menu/MenuMobile";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [background, setBackground] = useState("fondo-inicio");
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const changeBackground = (newBackground) => {
    setBackground(newBackground);
  };

  useEffect(() => {
    navigate("/");
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={background}>
      {isMobile ? <MenuMobile /> : <Menu changeBackground={changeBackground} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destination />} />
        <Route path="/tripulacion" element={<Crew />} />
        <Route path="/tecnologias" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
