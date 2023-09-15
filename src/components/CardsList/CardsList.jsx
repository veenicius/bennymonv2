import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "redaxios";

export default function CardsList(props) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePokemons = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}`
      );
      const pokemonUrls = response.data.results.map((poke) => poke.url);

      const pokemonData = await Promise.all(
        pokemonUrls.map(async (url) => {
          const response = await axios.get(url);
          return {
            name: response.data.name,
            id: response.data.id,
            image: response.data.sprites.front_default,
            type: response.data.types.map((type) => type.type.name),
          };
        })
      );

      setPokemons([...pokemons, ...pokemonData]);
      setOffset(offset + 20);
    } catch (error) {
      console.error("Erro ao buscar dados de Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePokemons();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pokemons]);

  useEffect(() => {
    loadMorePokemons();
  }, []);

  return (
    <div className="relative grid grid-col-2 gap-x-2 gap-y-8 md:grid-cols-2 xl:grid-cols-4 mt-12">
      {props.searchNoResults ? (
        <p>Não existe um Pokémon com esse nome.</p>
      ) : props.pokemonData ? (
        <PokemonCard
          id={props.pokemonData.id}
          name={props.pokemonData.name}
          type={props.pokemonData.type}
          image={props.pokemonData.image}
          setPokemonId={props.setPokemonId}
        />
      ) : (
        pokemons.map((poke, index) => (
          <PokemonCard
            key={index}
            id={poke.id}
            name={poke.name}
            type={poke.type}
            image={poke.image}
            setPokemonId={props.setPokemonId}
          />
        ))
      )}
      {isLoading && <p>Carregando...</p>}
    </div>
  );
}
