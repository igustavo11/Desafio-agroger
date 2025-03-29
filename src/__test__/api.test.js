import axios from "axios";
import { fetchCharacter } from "../services/api";

/* eslint-disable no-undef */

jest.mock("axios");

test("fetchCharacter retorna dados da API corretamente", async () => {
  const mockDados = {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  };

  axios.get.mockResolvedValue({ data: mockDados });

  const resultado = await fetchCharacter();

  expect(axios.get).toHaveBeenCalledWith(
    "https://rickandmortyapi.com/api/character/3"
  );

  expect(resultado).toEqual(mockDados);

  expect(resultado).toHaveProperty("id");
  expect(resultado).toHaveProperty("name");
  expect(resultado).toHaveProperty("species");
  expect(resultado).toHaveProperty("image");
});
