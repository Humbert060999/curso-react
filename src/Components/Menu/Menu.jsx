import "./Menu.css";
import IconoEstrella from "../../IMG/Logo.svg";
import { Button } from "antd";

export default function Navigation() {
  return (
    <div className="menu-container">
      <div>
        <img
          src={IconoEstrella}
          alt="Icono de una estrella"
          height="100px"
          width="auto"
        />
      </div>
      <div className="line"></div>
      <div className="menu-options">
        <div className="button-content">
          <button  className="button-options" type="link">
            00 INICIO
          </button>
        </div>
        <div className="button-content">
          <button className="button-options" type="link">
            01 DESTINOS
          </button>
        </div>
        <div className="button-content">
          <button className="button-options" type="link">
            02 TRIPULACION
          </button>
        </div>
        <div className="button-content">
          <button className="button-options" type="link">
            03 TECNOLOGIA
          </button>
        </div>
      </div>
    </div>
  );
}
