import "./PokemonCard.css";

export default function PokemonCard(props) {
  // console.log(typeBg);
  return (
    <div
      onClick={() => props.setPokemonId(props.id)}
      id={props.id}
      className="p-8 h-fit relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-70"
    >
      <img
        className="absolute right-0 -top-12 pokeImage"
        title={props.name}
        src={props.image}
        alt={props.name}
      ></img>
      <h2 className="capitalize tracking-widest text-xs title-font text-primaryText mb-1">
        {props.id}
      </h2>
      <h1 className="capitalize title-font text-base font-semibold text-primaryText mb-3">
        {props.name}
      </h1>

      <span
        className={`${props.type}Type w-fit px-4 flex py-2 rounded-full items-center flex-col leading-none`}
      >
        <span
          className={`capitalize text-xs text-${props.type}Type-text font-bold`}
        >
          {props.type}
        </span>
      </span>
    </div>
  );
}
