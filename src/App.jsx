import React from "react";
import Header from "./components/Header/header";
import RecipeList from "./components/RecipeList/recipelist";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <RecipeList />
    </div>
  );
}

export default App;
