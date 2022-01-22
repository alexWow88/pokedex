import "./Pokedex.scss";
import { useState, useEffect } from "react";
import PokedexCard from "../../components/PokedexCard/PokedexCard";

const Pokedex = () => {
  const [pokedexList, setPokedexList] = useState([]);

  const fetchPokedex = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse.results);
        setPokedexList(jsonResponse.results);
      })
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    fetchPokedex();
  }, []);

  return (
    <div className="pokedex">
      <div className="pokedex__header">Pokedex</div>
      {pokedexList
        ? pokedexList.map((pokemon) => <PokedexCard pokemon={pokemon} />)
        : " "}
    </div>
  );
};

export default Pokedex;
