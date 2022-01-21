import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
      <section className={styles.header}>
        <h1>What Pokemon are you looking for?</h1>
        <form>
          <label></label>
          <input placeholder="Search Pokemon, Move, Ability, etc"></input>
        </form>
      </section>
  );
};

export default Header;
