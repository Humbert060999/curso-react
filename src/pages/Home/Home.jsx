import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="text-home-1">ASI QUE QUIERES VIAJAR AL</div>
        <div className="text-home-2">ESPACIO</div>
        <div className="text-home-3">
          Seamos realistas: si quieres ir al espacio, ¡lo mejor es ir al espacio
          exterior de verdad y no solo flotar cerca de él! Relájate y siéntate,
          porque te ofreceremos una experiencia fuera de este mundo.
        </div>
      </div>
      <div className="button-explore-container">
        <NavLink to="/destinos" style={{ color: "black" }}>
          <button className="button-explore">EXPLORAR</button>
        </NavLink>
      </div>
    </div>
  );
}
