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
      {/* {pokedexList
        ? pokedexList.map((pokemon) => <PokedexCard pokemon={pokemon} />)
        : " "} */}
      {pokedexList ? <PokedexCard pokemon={pokedexList[0]} /> : " "}
      <div className="pokedex-buttons">
        <div className="pokedex-buttons__left">
          <div className="pokedex-buttons__left__top">
            <div className="pokedex-buttons__left__top__circle"></div>
            <button className="pokedex-buttons__left__top__green"></button>
            <button className="pokedex-buttons__left__top__red"></button>
          </div>
          <div className="pokedex-buttons__left__bottom">
            <input type="text" className="searchbar" />
          </div>
        </div>
        <div className="pokedex-buttons__right">
          <div className="d-pad">
            <div className="d-pad__vertical">
              <button className="d-pad__vertical__up-arrow"></button>
              <button className="d-pad__vertical__down-arrow"></button>
            </div>
            <div className="d-pad__left">
              <button className="d-pad__left__arrow"></button>
            </div>
            <div className="d-pad__right">
              <button className="d-pad__right__arrow"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
