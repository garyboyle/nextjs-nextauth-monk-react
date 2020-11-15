import React from "react";
import { signIn, useSession } from "next-auth/client";
import NextDrinkingDay from "@components/nextDrinkingDay";
import NavBar from "@components/navBar";
import db from "./api/utils/db";

export default function Page({ maxDrinkingDays, drinkingDaysSoFar, name }) {
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
              name={name}
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
      maxDrinkingDays: user?.maxDrinkingDays || 0,
      drinkingDaysSoFar: user?.drinkingDaysSoFar || 0,
      name: user?.name || "",
    },
  };
}
