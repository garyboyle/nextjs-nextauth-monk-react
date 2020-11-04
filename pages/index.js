import React, { useState } from "react";
import { signIn, useSession } from "next-auth/client";
import NextDrinkingDay from "../src/components/nextDrinkingDay";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  const [session] = useSession();
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
      {!session && (
        <>
          <p className="text-center">Not signed in </p>
          <button className="btn btn-primary d-block mx-auto" onClick={signIn}>
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          <NextDrinkingDay
            maxDrinkingDay={maxDrinkingDays}
            drinkingDaysSoFar={drinkingDaysSoFar}
            onMaxDrinkingDaysChange={handleMaxDrinkingDaysChange}
            onDrinkingDaysSoFarChange={handleDrinkingDaysSoFarChange}
          />
        </>
      )}
    </>
  );
}
