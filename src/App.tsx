import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import styles from "./App.module.css";
import { RestarauntState } from "./state";
import { Restaraunt } from "./types";
import "./app.css";
let newArr;

const App = (): JSX.Element => {
  const [filterState, setFilterState] = useState<Restaraunt[]>(RestarauntState);
  const handleFilter = (value: string) => {
    switch (value) {
      case "hookah":
        setFilterState(
          RestarauntState.filter((item: Restaraunt) => item.hookah)
        );
        break;
      case "animals":
        setFilterState(
          RestarauntState.filter((item: Restaraunt) => item.animals)
        );
        break;
      case "vegan":
        setFilterState(
          RestarauntState.filter((item: Restaraunt) => item.vegan)
        );
        break;
      case "breakfast":
        setFilterState(
          RestarauntState.filter((item: Restaraunt) => item.breakfast)
        );
        break;
      case "reset":
        setFilterState(RestarauntState);
        break;
      case "decreasing":
        newArr = [...RestarauntState].sort((a, b) => b.avgPrice - a.avgPrice);
        setFilterState(newArr);
        break;
      case "increasing":
        newArr = [...RestarauntState].sort((a, b) => a.avgPrice - b.avgPrice);
        setFilterState(newArr);
        break;
    }
  };

  return (
    <div>
      <NavBar handleFilter={handleFilter} />
      <div className={styles.container}>
        <TransitionGroup className={styles.main}>
          {filterState.map((item: Restaraunt) => (
            <CSSTransition key={item.id} timeout={500} classNames="card">
              <Card item={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
