import "./Menu.scss";
import { Link } from "react-router-dom";
import MenuButton from "../../components/MenuButton/MenuButton";

const Menu = () => {
  return (
    <div className="menu">
      <MenuButton text="Pokedex" linkTo="/mainpokedex" />
      <MenuButton text="Poke-Team" linkTo="/mainpokedex" />
    </div>
  );
};

export default Menu;
