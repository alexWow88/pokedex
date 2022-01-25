import React from "react";
import "./PokemonStats.scss";

const PokemonStats = ({ pokemonInfo }) => {
  return (
    <div className="pokemonStats">
      <div className="pokemonStats__header">Base Stats</div>
      {pokemonInfo.stats.map((item) => (
        <div className="pokemonStats__stat">
          <span className="pokemonStats__stat__name">
            {item.stat.name.toUpperCase()}
          </span>
          <span className="pokemonStats__stat__bar">
            <span className="pokemonStats__stat__bar__value">
              {item.base_stat} / 120
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
