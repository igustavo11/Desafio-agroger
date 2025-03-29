import React, { useState } from "react";
import { mockSessions } from "../../mocks/sessions.mock";
import { fetchCharacter } from "../../services/api";
import "./recipelist.scss";
import Button from "../ui/Button/button";

const RecipeList = () => {
  const [sessoes, setSessoes] = useState(mockSessions); //inicializa com os mocks
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const character = await fetchCharacter(); //chama a api pro proximo

      const novaSessao = {
        species: character.species,
        id: character.id,
        name: character.name,
        image: character.image,
      };

      //adiciona o novo personagem na lista
      setSessoes((prevSessao) => [novaSessao, ...prevSessao]);
    } catch (error) {
      console.error("Erro:", error);
    }
    setLoading(false);
  };

  return (
    <div className="main-content">
      <Button onClick={fetchData} disabled={loading} className="main-button">
        {loading ? "Carregando..." : "Novo Personagem"}
      </Button>

      <div className="sessoes-container">
        {sessoes.map((sessao) => (
          <div key={sessao.id} className="card">
            <div className="content">
              <h2 className="title-id">ID: {sessao.id}</h2>
              <div className="desc">
                <h3>Especie: {sessao.species}</h3>
                <p className="desc-name">
                  <strong>Nome:</strong> {sessao.name}
                </p>
              </div>
              <div className="card-action">
                <Button className="card-button">Ver detalhes</Button>
              </div>
            </div>
            <img src={sessao.image} alt={sessao.name} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
