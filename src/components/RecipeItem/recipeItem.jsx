import React from "react";
import "./recipeItem.scss";
import { Pencil } from "lucide";

const RecipeItem = ({ session }) => (
  <div className="session-card">
    <h3>Sessão#{session.id}</h3>

    <div className="session-actions">
      <button className="provar-agora">Escolher personagem</button>
      <button className="finalizada">
        <Pencil />
      </button>
    </div>
  </div>
);

export default RecipeItem;
