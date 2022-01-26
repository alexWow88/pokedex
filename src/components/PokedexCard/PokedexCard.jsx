import React from "react";
import "./PokedexCard.scss";
import { useState, useEffect } from "react";
import PokemonSize from "../PokemonSize/PokemonSize";
import PokemonType from "../PokemonType/PokemonType";
import PokemonStats from "../PokemonStats/PokemonStats";

const PokedexCard = ({ currentPokemon, pokemon }) => {
  const [pokemonInfo, setPokemonInfo] = useState(false);

  const fetchPokemonInfo = () => {
    fetch(`${pokemon[currentPokemon].url}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setPokemonInfo(jsonResponse);
      })
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, [currentPokemon]);

  return (
    <div className="pokedexCard">
      <div
        className={`pokedexCard__inner pokedexCard__inner__${
          pokemonInfo ? pokemonInfo.types[0].type.name : ""
        }`}
      >
        <div className="pokedexCard__inner__header">
          <div className="pokedexCard__inner__header__name">
            {pokemon[currentPokemon].name}
          </div>
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
