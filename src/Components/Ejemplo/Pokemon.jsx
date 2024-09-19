import { useEffect, useState } from "react";
import api from "../../Services/api";
import { getPokemons, createPokemon } from "../../Services/pokemon";

export default function Ejemplo() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await getPokemons();
        console.log("Mensaje desde ejemplo ", response);
        setList(response.data.results);
      } catch (error) {
        throw new error(error);
      }
    };

    getPoke();
  }, []);
  return (
    <div>
      {list.map((obj, id) => {
        return (
          <div key={id}>
            <span>{id+1}</span>
            <h2>{obj.name}</h2>
            <p>{obj.url}</p>
          </div>
        );
      })}
    </div>
  );
}
