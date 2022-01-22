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
    <>
      <div className="pokedexCard">{pokemon.name}</div>
      <img
        className="pokedexCard__img"
        src={pokemonInfo ? pokemonInfo.sprites.front_default : ""}
      />
    </>
  );
};

export default PokedexCard;
