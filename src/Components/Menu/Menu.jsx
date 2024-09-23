import "./Menu.css";
import { NavLink } from "react-router-dom";
import IconoEstrella from "../../IMG/Logo.svg";
import { Button } from "antd";

export default function Navigation() {
  return (
    <div className="menu-container">
      <div className="icon-star">
        <NavLink to="/">
          <img src={IconoEstrella} alt="Icono de una estrella" height="70px" />
        </NavLink>
      </div>
      <div className="line"></div>
      <div className="menu-options">
        <div className="button-content">
          <NavLink
            to="/"
            style={{ color: "white" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="button-options"><b>00</b> INICIO</button>
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="/destinos"
            style={{ color: "white" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="button-options"><b>01</b> DESTINOS</button>
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="/tripulacion"
            style={{ color: "white" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="button-options"><b>02</b> TRIPULACION</button>
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="tecnologias"
            style={{ color: "white" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="button-options"><b>03</b> TECNOLOGIA</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
