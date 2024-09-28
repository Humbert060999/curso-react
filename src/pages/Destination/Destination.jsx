import "./Destination.css";

import Planet from "../../Components/Planet/Planet";
import { useEffect, useState } from "react";
import { getPokemons } from "../../Services/pokemon"; // Asegúrate de que la ruta sea correcta
import api from "../../Services/api"; // Importa api desde la ruta correcta

export default function Destination() {
  const [planet, setPlanet] = useState("Moon");
  const [moonDescription, setMoonDescription] = useState(true);
  const [marsDescription, setMarsDescription] = useState(false);
  const [titanDescription, setTitanDescription] = useState(false);
  const [earthDescription, setEarthDescription] = useState(false);

  const [listPokemon, setListPokemon] = useState([]);

  const selectionPlanet = (planet) => {
    setPlanet(planet);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons();
      const pokemons = response.data.results;

      const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
          const pokemonResponse = await api.get(pokemon.url);
          return {
            name: pokemonResponse.data.name,
            officialArt:
              pokemonResponse.data.sprites.other["official-artwork"]
                .front_default,
          };
        })
      );
      setListPokemon(pokemonData);
      console.log("el valor de los pokemons ", pokemonData);
    };
    switch (planet) {
      case "Luna":
        setPlanet("Luna");
        setMoonDescription(true);
        setMarsDescription(false);
        setTitanDescription(false);
        setEarthDescription(false);
        break;
      case "Marte":
        setPlanet("Marte");
        setMoonDescription(false);
        setMarsDescription(true);
        setTitanDescription(false);
        setEarthDescription(false);
        break;
      case "Titan":
        setPlanet("Titan");
        setMoonDescription(false);
        setMarsDescription(false);
        setTitanDescription(true);
        setEarthDescription(false);
        break;
      case "Tierra":
        fetchPokemons();
        setPlanet("Tierra");
        setMoonDescription(false);
        setMarsDescription(false);
        setTitanDescription(false);
        setEarthDescription(true);
        break;
      default:
        setPlanet("Luna");
    }
  }, [planet]);

  return (
    <div className="destination-container">
      <div className="destination-image-planet">
        <h2 className="destination-title">
          <b>01</b> ELIGE TU DESTINO
        </h2>
        <div>
          <Planet namePlanet={planet} />
          {planet === "Tierra" && listPokemon.length > 0 && (
            <img
              className="destination-image"
              src={listPokemon[0].officialArt}
              alt={listPokemon[0].name}
            />
          )}
           {planet === "Tierra" && listPokemon.length > 0 && (
            <img
              className="destination-image-2"
              src={listPokemon[3].officialArt}
              alt={listPokemon[3].name}
            />
          )}
        </div>
      </div>
      <div className="destination-submenu-container">
        <div className="destination-submenu-description">
          <div className="destination-submenu">
            <div className="destination-submenu-options">
              <div>
                <button
                  onClick={() => selectionPlanet("Luna")}
                  className="destination-button"
                >
                  Luna
                </button>
              </div>
              <div>
                <button
                  onClick={() => selectionPlanet("Marte")}
                  className="destination-button"
                >
                  Marte
                </button>
              </div>
              <div>
                <button
                  onClick={() => selectionPlanet("Titan")}
                  className="destination-button"
                >
                  Titan
                </button>
              </div>
              <div>
                <button
                  onClick={() => selectionPlanet("Tierra")}
                  className="destination-button"
                >
                  Mundo Pokémon
                </button>
              </div>
            </div>
          </div>
          <div className="destination-description">
            {moonDescription && (
              <div>
                <h2 className="destination-title-description">LUNA</h2>
                <p>
                  Observa nuestro planeta como nunca antes. Un viaje relajante
                  perfecto para recuperar la perspectiva y volver renovado.
                  Mientras estés allí, conoce un poco de historia visitando los
                  sitios de aterrizaje de Luna 2 y Apolo 11.
                </p>
              </div>
            )}
            {marsDescription && (
              <div>
                <h2 className="destination-title-description">MARTE</h2>
                <p>
                  No olvides tus botas de montaña. Las necesitarás para
                  conquistar el Monte Olimpo, el coloso de nuestro sistema
                  solar. ¡Imagina escalar una montaña más de dos veces más alta
                  que el Everest!
                </p>
              </div>
            )}
            {titanDescription && (
              <div>
                <h2 className="destination-title-description">TITAN</h2>
                <p>
                  La única luna conocida por tener una atmósfera densa además de
                  la Tierra, Titán es un hogar lejos del hogar (¡solo unos pocos
                  cientos de grados más frío!). Como bono, tienes vistas
                  impresionantes de los Anillos de Saturno.
                </p>
              </div>
            )}
            {earthDescription && (
              <div>
                <h2 className="destination-title-description">Mundo Pokémon</h2>
                <p>
                  ¡Exploradores Pokémon, prepárense para una aventura épica!
                  Hemos encontrado un nuevo planeta lleno de Pokémon
                  desconocidos y paisajes increíbles. ¡Unámonos para explorar
                  este nuevo mundo, descubrir especies nunca antes vistas y
                  forjar nuevas amistades!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="destination-distance-days">
          <div className="destination-distance">
            {moonDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Distancia promedio
                </h3>
                <p className="destination-distance-description">384.000 KM</p>
              </div>
            )}
            {marsDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Distancia promedio
                </h3>
                <p className="destination-distance-description">225.000 KM</p>
              </div>
            )}
            {titanDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Distancia promedio
                </h3>
                <p className="destination-distance-description">1,6 BILL KM</p>
              </div>
            )}
            {earthDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Distancia promedio
                </h3>
                <p className="destination-distance-description">500.000 KM</p>
              </div>
            )}
          </div>
          <div className="destination-days">
            {moonDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Tiempo estimado de viaje
                </h3>
                <p className="destination-days-description">3 DAYS</p>
              </div>
            )}
            {marsDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Tiempo estimado de viaje
                </h3>
                <p className="destination-days-description">9 MESES</p>
              </div>
            )}
            {titanDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Tiempo estimado de viaje
                </h3>
                <p className="destination-days-description">7 AÑOS</p>
              </div>
            )}
            {earthDescription && (
              <div>
                <h3 className="destination-title-2-description">
                  Tiempo estimado de viaje
                </h3>
                <p className="destination-days-description">15 DAYS</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
