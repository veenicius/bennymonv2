import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchNoResults, setSearchNoResults] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`
      );

      if (response.status === 200) {
        const data = response.data;
        if (data) {
          const pokemonData = {
            name: data.name,
            id: data.id,
            image: data.sprites?.front_default || "",
            type: data.types[0]?.type?.name || "",
          };

          setPokemonData(pokemonData);
          setSearchNoResults(false);
          setSearchInput("");
        } else {
          setSearchNoResults(true);
          console.error("Dados de Pokémon não encontrados na resposta da API");
        }
      } else {
        setSearchNoResults(true);
        console.error("Erro ao buscar dados de Pokémon");
      }
    } catch (error) {
      setSearchNoResults(true);
      console.error("Erro ao buscar dados de Pokémon:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for your Pokémon!"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      {searchNoResults && (
        <p className="text-red-500">Nenhum Pokémon encontrado.</p>
      )}
    </form>
  );
}
