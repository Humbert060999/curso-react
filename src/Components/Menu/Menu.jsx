import "./Menu.css";
import { NavLink } from "react-router-dom";
import IconoEstrella from "../../IMG/Logo.svg";

export default function Menu({ changeBackground }) {
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
            className={({ isActive, isPending }) =>
              `button-options ${isActive ? "active" : isPending ? "pending" : ""}`
            }
            onClick={() => changeBackground("fondo-inicio")}
          >
            <b>00</b> INICIO
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="/destinos"
            className={({ isActive, isPending }) =>
              `button-options ${isActive ? "active" : isPending ? "pending" : ""}`
            }
            onClick={() => changeBackground("fondo-destino")}
          >
            <b>01</b> DESTINOS
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="/tripulacion"
            className={({ isActive, isPending }) =>
              `button-options ${isActive ? "active" : isPending ? "pending" : ""}`
            }
            onClick={() => changeBackground("fondo-tripulacion")}
          >
            <b>02</b> TRIPULACION
          </NavLink>
        </div>
        <div className="button-content">
          <NavLink
            to="/tecnologias"
            className={({ isActive, isPending }) =>
              `button-options ${isActive ? "active" : isPending ? "pending" : ""}`
            }
            onClick={() => changeBackground("fondo-tecnologia")}
          >
            <b>03</b> TECNOLOGIA
          </NavLink>
        </div>
      </div>
    </div>
  );
}
