import "./Crew.css";

import Douglas from "../../IMG/Persons/douglas.svg";
import Mark from "../../IMG/Persons/mark.svg";
import Victor from "../../IMG/Persons/victor.svg";
import Ansari from "../../IMG/Persons/ansari.svg";

import { useState } from "react";

export default function Crew() {
  const [option, setOption] = useState(1);
  const handleClick = (res) => {
    console.log(res);
    setOption(res);
  };
  return (
    <div className="crew-container">
      <div className="crew-description">
        <h2 className="crew-title">02 CONOCE TU TRIPULACIÓN</h2>
        {option === 1 && (
          <div className="crew-information">
            <h3 className="crew-range">COMANDANTE</h3>
            <h2 className="crew-name">DOUGLAS HURLEY</h2>
            <p className="crew-text">
              Douglas Gerald Hurley es un ingeniero estadounidense, ex piloto de
              la Infantería de Marina y ex astronauta de la NASA. Se lanzó al
              espacio por tercera vez como comandante de Crew Dragon Demo-2.
            </p>
          </div>
        )}
        {option === 2 && (
          <div className="crew-information">
            <h3 className="crew-range">ESPECIALISTA EN MISION</h3>
            <h2 className="crew-name">MARK SHUTTLEWORTH</h2>
            <p className="crew-text">
              Mark Richard Shuttleworth es el fundador y director ejecutivo de
              Canonical, la empresa detrás del sistema operativo Ubuntu basado
              en Linux. Shuttleworth se convirtió en el primer sudafricano en
              viajar al espacio como turista espacial.
            </p>
          </div>
        )}
        {option === 3 && (
          <div className="crew-information">
            <h3 className="crew-range">PILOTO</h3>
            <h2 className="crew-name">Victor Glover</h2>
            <p className="crew-text">
              Piloto del primer vuelo operativo del SpaceX Crew Dragon a la
              Estación Espacial Internacional. Glover es un comandante de la
              Marina de los EE. UU., donde pilota un F/A-18.
            </p>
          </div>
        )}
        {option === 4 && (
          <div className="crew-information">
            <h3 className="crew-range">INGENIERA DE VUELO</h3>
            <h2 className="crew-name">Anousheh Ansari</h2>
            <p className="crew-text">
              Anousheh Ansari es un ingeniero estadounidense iraní y cofundador
              de Prodea Systems. Ansari fue la cuarta turista espacial
              autofinanciada, la primera mujer autofinanciada en volar a la ISS
              y la primera iraní en el espacio.
            </p>
          </div>
        )}
        <div className="crew-menu">
          <button className="menu-item" onClick={() => handleClick(1)}></button>
          <button className="menu-item" onClick={() => handleClick(2)}></button>
          <button className="menu-item" onClick={() => handleClick(3)}></button>
          <button className="menu-item" onClick={() => handleClick(4)}></button>
        </div>
      </div>
      <div className="crew-photo-container">
        {option === 1 && (
          <img className="crew-photo" src={Douglas} alt="foto del personaje" />
        )}
        {option === 2 && (
          <img className="crew-photo" src={Mark} alt="foto del personaje" />
        )}{" "}
        {option === 3 && (
          <img className="crew-photo" src={Victor} alt="foto del personaje" />
        )}{" "}
        {option === 4 && (
          <img className="crew-photo" src={Ansari} alt="foto del personaje" />
        )}
      </div>
    </div>
  );
}
