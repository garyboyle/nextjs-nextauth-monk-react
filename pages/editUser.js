import React from "react";
import NavBar from "../src/components/navBar";

export default function editUser({ user }) {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1>Edit user</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              id="name"
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
            />
          </div>
          <button className="btn btn-lg btn-primary">Save</button>
        </form>
      </div>
    </>
  );
}
