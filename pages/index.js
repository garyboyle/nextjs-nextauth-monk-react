import React from "react";
import { signIn, useSession } from "next-auth/client";
import NextDrinkingDay from "../src/components/nextDrinkingDay";
import NavBar from "../src/components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
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
          <NextDrinkingDay />
        </>
      )}
    </>
  );
}
