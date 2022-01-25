import React from "react";
import "./PokedexCard.scss";
import { useState, useEffect } from "react";
import PokemonSize from "../PokemonSize/PokemonSize";
import PokemonType from "../PokemonType/PokemonType";

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
      <div className="pokedexCard__inner">
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
      {/* <div className="pokedexCard__types">
        {pokemonInfo ? (
          pokemonInfo.types.map((item) => (
            <div className="pokedexCard__types__type">{item?.type.name}</div>
          ))
        ) : (
          <div></div>
        )}
      </div> */}
      <PokemonType pokemonInfo={pokemonInfo} />
      {pokemonInfo && <PokemonSize pokemonInfo={pokemonInfo} />}
    </div>
  );
};

export default PokedexCard;
