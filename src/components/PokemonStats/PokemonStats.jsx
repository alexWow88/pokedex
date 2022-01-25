import React from "react";
import "./PokemonStats.scss";

const PokemonStats = ({ pokemonInfo }) => {
  return (
    <div className="pokemonStats">
      <div className="pokemonStats__header">Base Stats</div>
      {pokemonInfo.stats.map((item) => (
        <div className="pokemonStats__stat">
          <div className="pokemonStats__stat__name">
            {item.stat.name.toUpperCase()}
          </div>
          <div className="pokemonStats__stat__bar">
            <div
              className="pokemonStats__stat__bar__inner"
              style={{ backgroundColor: "red", width: `${item.base_stat}%` }}
            ></div>
            <div className="pokemonStats__stat__bar__value">
              {item.base_stat} / 100
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
