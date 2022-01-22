import React from "react";
import "./PokedexCard.scss";
import { useState, useEffect } from "react";

const PokedexCard = ({ pokemon }) => {
  // const [pokemonInfo, setPokemonInfo] = useState([]);

  // const fetchPokemonInfo = () => {
  //   fetch(`https://pokeapi.co/api/v2/${pokemon.name}`)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       console.log(jsonResponse);
  //       setPokemonInfo(jsonResponse);
  //     })
  //     .catch((err) => console.log("err"));
  // };

  // useEffect(() => {
  //   fetchPokemonInfo();
  // }, []);

  return (
    <>
      <div className="pokedexCard">{pokemon.name}</div>
      {/* <img
        className="pokedexCard__img"
        src={
          pokemonInfo
            ? pokemonInfo.sprites.back_default
            : "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pokeball.png"
        }
      /> */}
    </>
  );
};

export default PokedexCard;
