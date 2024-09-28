import api from "./api";

export const getPokemons = async () => {
  try {
    const response = await api.get("pokemon");
    console.log(response);
    return response;
  } catch (error) {
    console.log("No se pudo obtener los datos", error);
  }
};

