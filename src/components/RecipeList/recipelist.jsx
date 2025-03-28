import React, { useState } from "react";
import { mockSessions } from "../../mocks/sessions.mock";
import { fetchCharacter } from "../../services/api";
import "./recipelist.scss";

const RecipeList = () => {
  const [sessoes, setSessoes] = useState(mockSessions); //inicializa com os mocks
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const character = await fetchCharacter(); //chama a api pro proximo

      const novaSessao = {
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
    // retorna o personagem
    <div className="main-content">
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Carregando..." : "Novo Personagem"}
      </button>

      <div className="sessoes-container">
        {sessoes.map((sessao) => (
          <div key={sessao.id} className="session-item">
            <h3>{sessao.title}</h3>
            <p>
              <strong>ID:</strong> {sessao.id}
            </p>
            <p>
              <strong>Nome:</strong> {sessao.name}
            </p>
            <img src={sessao.image} alt={sessao.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
