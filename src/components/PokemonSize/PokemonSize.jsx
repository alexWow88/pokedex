import React from "react";
import "./PokemonSize.scss";

const PokemonSize = ({ pokemonInfo }) => {
  return (
    <div className="pokemonSize">
      <div className="pokemonSize__height">
        <div className="pokemonSize__height__label">Height</div>
        <div className="pokemonSize__height__number">
          {pokemonInfo.height / 10} M
        </div>
      </div>
      <div className="pokemonSize__weight">
        <div className="pokemonSize__weight__label">Weight</div>
        <div className="pokemonSize__weight__number">
          {pokemonInfo.weight} KG
        </div>
      </div>
    </div>
  );
};

export default PokemonSize;
