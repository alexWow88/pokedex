import React from "react";
import "./PokedexCard.scss";
import { useState, useEffect } from "react";

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
        <div className="pokedexCard__name">{pokemon.name.toUpperCase()}</div>
        <img
          className="pokedexCard__img"
          src={pokemonInfo ? pokemonInfo.sprites.front_default : ""}
        />
      </div>
      <div className="pokedexCard__size">
        <div className="pokedexCard__size__item">
          Height: {pokemonInfo.height} in
        </div>
        <div className="pokedexCard__size__item">
          Weight: {pokemonInfo.weight} lb
        </div>
      </div>
    </div>
  );
};

export default PokedexCard;
