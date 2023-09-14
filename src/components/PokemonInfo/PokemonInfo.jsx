import React, { useEffect, useState } from "react";
import axios from "redaxios";

export default function PokemonInfo(props) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  async function getPokemonInfo(id) {
    if (id == null) {
      return;
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;

    console.log(data);
    let currentPoke = {
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      type: data.types[0].type.name,
    };

    setPokemonInfo(currentPoke);
  }

  useEffect(() => {
    // console.log(props.pokemonId);
    getPokemonInfo(props.pokemonId);
  }, [props.pokemonId]); // Add props.id as a dependency

  return (
    <>
      {pokemonInfo ? (
        <>
          <div className="border-t-24 p-8 h-fit relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-100">
            <img
              className="w-32 absolute right-0 top-0 pokeImage"
              src={pokemonInfo.image}
            />
            <h2 className="capitalize tracking-widest text-xs title-font text-primaryText mb-1">
              {pokemonInfo.id}
            </h2>
            <h1 className="capitalize title-font text-base font-semibold text-primaryText mb-1">
              {pokemonInfo.name}
            </h1>

            <span
              className={`${pokemonInfo.type}Type w-fit px-4 flex py-2 rounded-full items-center flex-col leading-none`}
            >
              <span
                className={`capitalize text-xs text-${pokemonInfo.type}Type-text font-bold`}
              >
                {pokemonInfo.type}
              </span>
            </span>

            <div className="description my-8">
              <h1 className="capitalize w-full text-center text-base font-semibold text-primaryText mb-1">
                Pokemon Description
              </h1>
              <p className="text-center normal-case text-base text-primaryText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
            </div>
            <div className="abilities my-8">
              <h1 className="w-full text-center capitalize text-base font-semibold text-primaryText mb-2">
                Abilities
              </h1>
              <div className="inline-grid grid-cols-2 gap-4 w-full">
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full flex items-start flex-col leading-none">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Torrent
                  </span>
                </span>
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full flex items-start flex-col leading-none">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Defiant
                  </span>
                </span>
              </div>
            </div>
            <div className="stats my-8">
              <div className="inline-grid grid-cols-3 gap-4 w-full">
                <div className="text-center w-auto">
                  <span className="block text-base font-semibold uppercase tracking-widest">
                    Height
                  </span>
                  <span className="block text-gray-400">1.7m</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-base font-semibold uppercase tracking-widest">
                    Weight
                  </span>
                  <span className="block text-gray-400">84.5Kg</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-base font-semibold uppercase tracking-widest">
                    B. EXP
                  </span>
                  <span className="block text-gray-400">239</span>
                </div>
              </div>
            </div>
            <div className="weak my-8">
              <h1 className="w-full text-center capitalize text-base font-semibold text-primaryText mb-2">
                Weakness
              </h1>
              <div className="inline-grid grid-cols-3 gap-4 w-full">
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full flex items-start flex-col leading-none">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Fire
                  </span>
                </span>
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full flex items-start flex-col leading-none">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Fly
                  </span>
                </span>{" "}
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full flex items-start flex-col leading-none">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Ice
                  </span>
                </span>
              </div>
            </div>
            <div className="attrs my-8">
              <div className="inline-grid grid-cols-7 gap-1 w-full">
                <div className="text-center w-auto">
                  <span className="uppercase block text-xs font-semibold uppercase tracking-widest">
                    Hp{" "}
                  </span>
                  <span className="block text-gray-400">84</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Atk
                  </span>
                  <span className="block text-gray-400">86</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Def
                  </span>
                  <span className="block text-gray-400">88</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Sp.A
                  </span>
                  <span className="block text-gray-400">111</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Sp.D
                  </span>
                  <span className="block text-gray-400">101</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    SPD
                  </span>
                  <span className="block text-gray-400">60</span>
                </div>{" "}
                <div className="text-center w-auto">
                  <span className="block text-xs font-semibold uppercase tracking-widest">
                    Tot
                  </span>
                  <span className="block text-gray-400">530</span>
                </div>
              </div>
            </div>
            <div className="evolve my-8">
              <h1 className="capitalize w-full text-center text-base font-semibold text-primaryText mb-1">
                Evolution
              </h1>
              <div className="h-16 row-auto items-center inline-grid grid-cols-5 gap-4 w-full">
                <img
                  className="w-full pokeImage"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                />{" "}
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full h-fit">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Lvl 16
                  </span>
                </span>
                <img
                  className="w-full pokeImage"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                />{" "}
                <span className="text-center w-full bg-grassType-bg py-2 rounded-full h-fit">
                  <span className="w-full text-center capitalize text-sm text-grassType-text font-bold">
                    Lvl 32
                  </span>
                </span>
                <img
                  className="w-full pokeImage"
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
