import React, { useState } from "react";
import NextDrinkingDay from "./components/nextDrinkingDay";
import "./App.css";

function App() {
  const [maxDrinkingDays, setMaxDrinkingDays] = useState(50);
  const [drinkingDaysSoFar, setDrinkingDaysSoFar] = useState(43);

  function handleMaxDrinkingDaysChange(delta) {
    setMaxDrinkingDays(maxDrinkingDays + delta);
  }

  function handleDrinkingDaysSoFarChange(delta) {
    setDrinkingDaysSoFar(drinkingDaysSoFar + delta);
  }

  return (
    <>
      <NextDrinkingDay
        maxDrinkingDay={maxDrinkingDays}
        drinkingDaysSoFar={drinkingDaysSoFar}
        onMaxDrinkingDaysChange={handleMaxDrinkingDaysChange}
        onDrinkingDaysSoFarChange={handleDrinkingDaysSoFarChange}
      />
    </>
  );
}

export default App;
