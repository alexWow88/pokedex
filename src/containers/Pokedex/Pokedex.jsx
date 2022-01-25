import "./Pokedex.scss";
import { useState, useEffect } from "react";
import PokedexCard from "../../components/PokedexCard/PokedexCard";

const Pokedex = () => {
  const [pokedexList, setPokedexList] = useState(false);

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
      <div className="pokedex-top">
        <div className="pokedex-top__left">
          <div className="pokedex-top__left__grey-housing">
            <div className="blue-light"></div>
          </div>
        </div>
        <div className="pokedex-top__center-top">
          <div className="red-light"></div>
          <div className="yellow-light"></div>
          <div className="green-light"></div>
        </div>
        <div className="pokedex-top__right-top"></div>
        <div className="pokedex-top__center-bottom"></div>
        <div className="pokedex-top__right-bottom"></div>
      </div>
      {pokedexList
        ? pokedexList.map((pokemon) => <PokedexCard pokemon={pokemon} />)
        : " "}
    </div>
  );
};

export default Pokedex;
