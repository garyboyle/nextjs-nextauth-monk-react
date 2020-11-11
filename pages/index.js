import React from "react";
import { signIn, useSession } from "next-auth/client";
import NextDrinkingDay from "../src/components/nextDrinkingDay";
import NavBar from "../src/components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./api/utils/db";

export default function Page({ maxDrinkingDays, drinkingDaysSoFar }) {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <>
          <h1 className="text-center">Not signed in </h1>
          <button
            className="btn btn-lg btn-primary d-block mx-auto"
            onClick={signIn}
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          <NavBar />
          <div className="container">
            <NextDrinkingDay
              maxDrinkingDaysInitialValue={maxDrinkingDays}
              drinkingDaysSoFarStartInitialValue={drinkingDaysSoFar}
            />
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const user = await db.get("users").findOne({ email: "gary@shayoo.ie" });

  return {
    props: {
      maxDrinkingDays: user.maxDrinkingDays,
      drinkingDaysSoFar: user.drinkingDaysSoFar,
    },
  };
}
