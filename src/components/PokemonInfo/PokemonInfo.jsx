import React, { useEffect, useState } from "react";
import axios from "redaxios";

export default function PokemonInfo(props) {
  const formatPokemonId = (id) => {
    return String(id).padStart(4, "0");
  };

  const [pokemonInfo, setPokemonInfo] = useState(null);

  async function getPokemonDescription(endpoint) {
    const response = await axios.get(endpoint);
    return response.data.flavor_text_entries[0].flavor_text;
  }

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
      description: getPokemonDescription(data.species.url),
      abilities: data.abilities.map((ability) => ability.name),
      height: data.height,
      weight: data.weight,
      baseexp: data.base_experience
    };

    setPokemonInfo(currentPoke);
  }

  useEffect(() => {
    getPokemonInfo(props.pokemonId);
  }, [props.pokemonId]);

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
              {formatPokemonId(pokemonInfo.id)}
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
        <div className="justify-items-center text-center flex-col justify-center flex-auto place-content-center flex border-t-24 p-8 h-fit relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-100">
          <h2 className="text-xs text-gray-400 tracking-widest font-medium title-font mb-1">
            NO POKÉMON SELECTED
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-8 w-full"
            width="96"
            height="96"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M26.844 17.673c1.813 1.015 3.909 1.155 6.379.816"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.66 35.21c1.03-1.34 2.31-2.51 3.84-3.39c.97-.57 2.03-1.02 3.19-1.33c-2.6-2.84-3.94-15.92 6.03-16.42h.01c.19-.01.38-.01.58-.01c3.13 0 4.69 1.18 4.69 1.18s1.56-1.18 4.69-1.18c.2 0 .39 0 .58.01h.01c9.97.5 8.63 13.58 6.03 16.42c1.16.31 2.22.76 3.19 1.33c1.53.88 2.81 2.05 3.84 3.39"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.156 17.673c-1.813 1.015-3.909 1.155-6.379.816m6.513 3.869s.273-1.218-.417-1.92c0 0-.906.441-1.27 1.416c1.202.713 2.664.793 4.397.793c1.734 0 3.195-.08 4.396-.793c-.362-.975-1.269-1.417-1.269-1.417c-.69.703-.417 1.921-.417 1.921"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.19 32.37c2.53-1.22 5.31-.55 5.31-.55s-1.66-4.88-.46-11.38c-.52-5.96.28-7.91.93-8.35c.68-.45 4.93-.18 8.75 1.98h.01c1.8-.92 3.66-1.46 5.27-1.46s3.47.54 5.27 1.46h.01c3.82-2.16 8.07-2.43 8.75-1.98c.65.44 1.45 2.39.93 8.35c1.2 6.5-.46 11.38-.46 11.38s2.78-.67 5.31.55"
            />
            <circle
              cx="24"
              cy="24"
              r="21.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
}
