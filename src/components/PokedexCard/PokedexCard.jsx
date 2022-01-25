import React from "react";
import "./PokedexCard.scss";
import { useState, useEffect } from "react";
import PokemonSize from "../PokemonSize/PokemonSize";
import PokemonType from "../PokemonType/PokemonType";
import PokemonStats from "../PokemonStats/PokemonStats";

const PokedexCard = ({ pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(false);

  const fetchPokemonInfo = () => {
    fetch(`${pokemon.url}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setPokemonInfo(jsonResponse);
      })
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <div className="pokedexCard">
      <div
        className={`pokedexCard__inner pokedexCard__inner__${
          pokemonInfo ? pokemonInfo.types[0].type.name : ""
        }`}
      >
        <div className="pokedexCard__inner__header">
          <div className="pokedexCard__inner__header__name">{pokemon.name}</div>
          <div className="pokedexCard__inner__header__id">
            # {pokemonInfo?.id}
          </div>
        </div>

        <img
          className="pokedexCard__img"
          src={pokemonInfo ? pokemonInfo.sprites.front_default : ""}
        />
      </div>
      <PokemonType pokemonInfo={pokemonInfo} />
      {pokemonInfo && <PokemonSize pokemonInfo={pokemonInfo} />}
      {pokemonInfo && <PokemonStats pokemonInfo={pokemonInfo} />}
    </div>
  );
};

export default PokedexCard;
