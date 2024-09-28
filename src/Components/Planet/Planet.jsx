import "./Planet.css";
import { useEffect, useState } from "react";

import Moon from "../../IMG/Planets/Moon.svg";
import Mars from "../../IMG/Planets/Mars.svg";
import Titan from "../../IMG/Planets/Titan.svg";
import Tierra from "../../IMG/Planets/Tierra.png"

export default function Planet(props) {
  const [imagePlanet, setImagePlanet] = useState("Luna");

  useEffect(() => {
    switch (props.namePlanet) {
      case "Luna":
        setImagePlanet(Moon);
        break;
      case "Marte":
        setImagePlanet(Mars);
        break;
      case "Titan":
        setImagePlanet(Titan);
        break;
      case "Tierra":
        setImagePlanet(Tierra);
        break;
      default:
        setImagePlanet(Moon);
    }
  }, [props.namePlanet]);
  return (
    <div className="planet-container">
      <img
        className="planet-image image-earth"
        src={imagePlanet}
        alt="Imagen del planeta seleccionado"
      />
    </div>
  );
}
