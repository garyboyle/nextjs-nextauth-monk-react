import React from "react";
import { format, addDays } from "date-fns";

export default function NextDrinkingDay({
  maxDrinkingDay,
  drinkingDaysSoFar,
  onMaxDrinkingDaysChange,
  onDrinkingDaysSoFarChange,
}) {
  const nextDrinkDay = Math.ceil(
    (365 * (drinkingDaysSoFar + 1)) / maxDrinkingDay
  );
  const nextDate = addDays(new Date(2020, 0, 1), nextDrinkDay);

  return (
    <div className="vh-100 d-flex flex-column bg-light text-dark">
      <h1 className="mb-auto text-center">
        <span className="small">Your next drinking day is </span> <br />
        {format(nextDate, "do MMM yyyy")}
      </h1>

      <div>
        <p>
          <button
            className="btn btn-primary m-2"
            onClick={() => onMaxDrinkingDaysChange(1)}
          >
            +
          </button>
          <button
            className="btn btn-primary m-2"
            disabled={drinkingDaysSoFar >= maxDrinkingDay}
            onClick={() => onMaxDrinkingDaysChange(-1)}
          >
            -
          </button>
          {maxDrinkingDay} max drinking days per year
        </p>
        <p>
          <button
            className="btn btn-primary m-2"
            disabled={drinkingDaysSoFar >= maxDrinkingDay}
            onClick={() => onDrinkingDaysSoFarChange(1)}
          >
            +
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => onDrinkingDaysSoFarChange(-1)}
          >
            -
          </button>
          {drinkingDaysSoFar} days drinking so far
        </p>
      </div>
    </div>
  );
}
