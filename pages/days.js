import React, { useState } from "react";
import NextDrinkingDay from "../src/components/nextDrinkingDay";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const [maxDrinkingDays, setMaxDrinkingDays] = useState(50);
  const [drinkingDaysSoFar, setDrinkingDaysSoFar] = useState(43);

  function handleMaxDrinkingDaysChange(delta) {
    setMaxDrinkingDays(maxDrinkingDays + delta);
  }

  function handleDrinkingDaysSoFarChange(delta) {
    setDrinkingDaysSoFar(drinkingDaysSoFar + delta);
  }

  return (
    <NextDrinkingDay
      maxDrinkingDay={maxDrinkingDays}
      drinkingDaysSoFar={drinkingDaysSoFar}
      onMaxDrinkingDaysChange={handleMaxDrinkingDaysChange}
      onDrinkingDaysSoFarChange={handleDrinkingDaysSoFarChange}
    />
  );
}

export default HomePage;
