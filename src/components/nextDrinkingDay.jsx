import React, { useState } from "react";
import { format, addDays } from "date-fns";

export default function NextDrinkingDay({
  maxDrinkingDaysInitialValue,
  drinkingDaysSoFarStartInitialValue,
  name,
}) {
  const [maxDrinkingDays, setMaxDrinkingDays] = useState(
    maxDrinkingDaysInitialValue
  );
  const [drinkingDaysSoFar, setDrinkingDaysSoFar] = useState(
    drinkingDaysSoFarStartInitialValue
  );

  function handleMaxDrinkingDaysChange(delta) {
    setMaxDrinkingDays(+maxDrinkingDays + delta);
  }

  function handleDrinkingDaysSoFarChange(delta) {
    setDrinkingDaysSoFar(+drinkingDaysSoFar + delta);
  }

  const nextDrinkDay = Math.ceil(
    (365 * (+drinkingDaysSoFar + 1)) / maxDrinkingDays
  );

  const nextDate = addDays(new Date(2023, 0, 1), nextDrinkDay);

  return (
    <>
      <h1 className="text-center">
        <span className="small">Hi {name}, your next drinking day is </span>{" "}
        <br />
        {format(nextDate, "do MMM yyyy")} <br />
        🍺🍺🍺🍺🍺🍺🍺🍺
      </h1>

      <p>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleMaxDrinkingDaysChange(1)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={drinkingDaysSoFar >= maxDrinkingDays}
          onClick={() => handleMaxDrinkingDaysChange(-1)}
        >
          -
        </button>
        {maxDrinkingDays} max drinking days per year
      </p>
      <p>
        <button
          className="btn btn-primary m-2"
          disabled={drinkingDaysSoFar >= maxDrinkingDays}
          onClick={() => handleDrinkingDaysSoFarChange(1)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => handleDrinkingDaysSoFarChange(-1)}
        >
          -
        </button>
        {drinkingDaysSoFar} days drinking so far
      </p>
    </>
  );
}
