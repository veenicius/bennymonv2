import React, { useEffect, useState } from "react";
import "./App.css";
import CardsList from "./components/CardsList/CardsList";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Search from "./components/Search/Search";

function App() {
  const [pokemonId, setPokemonId] = useState([]);
  const [pokemonData, setPokemonData] = useState(null); 

  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 grid xl:col-8">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto">
                <Search setPokemonData={setPokemonData} />
                <CardsList setPokemonId={setPokemonId} pokemonData={pokemonData} /> 
              </div>
            </section>
          </div>
          <div id="scroll" className="hidden xl:block col-4 fixed right-0">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-12 mx-auto">
                <PokemonInfo pokemonId={pokemonId} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
