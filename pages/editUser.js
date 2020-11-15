import React from "react";
import NavBar from "@components/navBar";
import db from "./api/utils/db";

export default function editUser({ maxDrinkingDays, drinkingDaysSoFar, name }) {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1>Edit user</h1>
        <form action="/api/user/save" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              id="name"
              defaultValue={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxDrinkingDays">Max drinking days</label>
            <input
              type="text"
              className="form-control"
              placeholder="Max drinking days"
              name="maxDrinkingDays"
              id="maxDrinkingDays"
              defaultValue={maxDrinkingDays}
            />
          </div>
          <div className="form-group">
            <label htmlFor="drinkingDaysSoFar">Drinking days so far</label>
            <input
              type="text"
              className="form-control"
              placeholder="Drinking days so far"
              name="drinkingDaysSoFar"
              id="drinkingDaysSoFar"
              defaultValue={drinkingDaysSoFar}
            />
          </div>
          <button className="btn btn-lg btn-primary">Save</button>
        </form>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const user = await db.get("users").findOne({ email: "gary@shayoo.ie" });
  console.log(user);

  return {
    props: {
      maxDrinkingDays: user.maxDrinkingDays || 0,
      drinkingDaysSoFar: user.drinkingDaysSoFar || 0,
      email: user.email,
      name: user.name || "",
    },
  };
}
