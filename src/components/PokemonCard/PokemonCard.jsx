import "./PokemonCard.css";

export default function PokemonCard(props) {
  const formatPokemonId = (id) => {
    return String(id).padStart(4, "0");
  };

  return (
    <div
      onClick={() => props.setPokemonId(props.id)}
      id={props.id}
      className="p-8 h-full relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-70"
    >
      <img
        className="absolute right-0 -top-12 pokeImage"
        title={props.name}
        src={props.image}
        alt={props.name}
      ></img>
      <h2 className="text-xs text-gray-400 tracking-widest font-medium title-font mb-1">
        {formatPokemonId(props.id)}
      </h2>
      <h1 className="capitalize title-font text-base font-semibold text-primaryText mb-3">
        {props.name}
      </h1>

      <div className="inline-flex grid-cols-2 gap-1 w-full">
        {props.type.map((type, index) => (
          <span
            key={index}
            className={`${type}Type w-fit px-4 flex py-2 rounded-full items-center flex-col leading-none`}
          >
            <span
              key={index}
              className={`capitalize text-xs text-${type}Type-text font-bold`}
            >
              {props.type[index]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
