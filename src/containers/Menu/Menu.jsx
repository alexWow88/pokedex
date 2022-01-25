import "./Menu.scss";
import { Link } from "react-router-dom";
import MenuButton from "../../components/MenuButton/MenuButton";

const Menu = () => {
  return (
    <div className="menu">
      <MenuButton text='Pokedex' linkTo='/pokedex' />
      <MenuButton text='Poke-Team' linkTo='/pokedex' />
    </div>
  );
};

export default Menu;
