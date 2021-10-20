import React from "react";
import styles from "./NavBar.module.css";
interface NavBarProps {
  handleFilter: (value: string) => void;
}
const NavBar = ({ handleFilter }: NavBarProps): JSX.Element => {
  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleFilter("hookah");
        }}
      >
        Кальян
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleFilter("animals");
        }}
      >
        Милости просим с собакой
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleFilter("breakfast");
        }}
      >
        наличие завтраков
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleFilter("vegan");
        }}
      >
        Веган
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          handleFilter("reset");
        }}
      >
        Все
      </button>
      <select
        className={styles.button}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handleFilter(e.target.value);
        }}
      >
        <option>сортировка цен</option>
        <option value="decreasing">по убыванию</option>
        <option value="increasing">по возрастанию</option>
      </select>
    </div>
  );
};

export default NavBar;
