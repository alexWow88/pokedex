import "./Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/pokedex">
        <button className="menu__pokedex-button">Pokedex</button>
      </Link>
      <button className="menu__poke-team-button">Poke-Team</button>
    </div>
  );
};

export default Menu;
