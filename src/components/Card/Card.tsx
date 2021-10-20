import styles from "./Card.module.css";
import { Restaraunt } from "../../types";
interface CardProps {
  item: Restaraunt;
}
export default function Card({ item }: CardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.adress}>Город:{item.adress}</div>
      <div className={styles.options}>
        <div className={item.hookah ? styles.option_active : styles.option_non}>
          hookah{item.hookah}
        </div>
        <div
          className={item.animals ? styles.option_active : styles.option_non}
        >
          animals{item.animals}
        </div>
        <div
          className={item.breakfast ? styles.option_active : styles.option_non}
        >
          breakfast{item.breakfast}
        </div>
        <div className={item.vegan ? styles.option_active : styles.option_non}>
          vegan{item.vegan}
        </div>
      </div>
      <div className={styles.price}>Средняя цена:{item.avgPrice}</div>
    </li>
  );
}
