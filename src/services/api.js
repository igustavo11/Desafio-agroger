import axios from "axios";
// api publica do rick and morty
const API_SESSION = "https://rickandmortyapi.com/api/character/";

let currentId = 3; //começa do id 3, pois o 1 e 2 sao os mocks

export const fetchCharacter = async () => {
  try {
    const response = await axios.get(`${API_SESSION}${currentId}`);
    currentId++; //incrementar o id para o proximo
    return response.data;
  } catch (err) {
    console.error("Erro ao carregar personagem", err);
    throw new Error("Erro ao carregar");
  }
};
