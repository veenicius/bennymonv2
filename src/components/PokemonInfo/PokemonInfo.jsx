import React, { useEffect, useState } from "react";

export default function PokemonInfo(props) {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemonInfo(id) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonInfo = response.data;
    console.log(pokemonInfo);
  }

  return (
    <>
      <div className="p-8 h-fit relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-100">
        <img
          className="w-32 absolute right-0 top-0 pokeImage"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
        <h2 className="capitalize tracking-widest text-xs title-font text-primaryText mb-1">
          1
        </h2>
        <h1 className="capitalize title-font text-base font-semibold text-primaryText mb-1">
          Bulbasaur
        </h1>

        <button className="bg-grassType-bg inline-flex py-2 rounded-full items-center focus:outline-none mb-1">
          <span className="px-4 flex items-start flex-col leading-none">
            <span className="capitalize text-xs text-grassType-text font-bold">
              Grass
            </span>
          </span>
        </button>

        <div className="description my-8">
          <h1 className="capitalize w-full text-center text-base font-semibold text-primaryText mb-1">
            Pokemon Description
          </h1>
          <p className="text-center normal-case text-base text-primaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
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
  );
}
