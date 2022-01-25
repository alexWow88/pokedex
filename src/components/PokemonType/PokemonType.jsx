import React from "react";
import "./PokemonType.scss";

const PokemonType = ({ pokemonInfo }) => {
  return (
    <div className="pokedexCard__types">
      {pokemonInfo ? (
        pokemonInfo.types.map((item) => (
          <div className={`pokedexCard__types__type ${item?.type.name}`}>
            {item?.type.name}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PokemonType;
