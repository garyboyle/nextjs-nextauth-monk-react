import db from "../utils/db";

export default async function handler(req, res) {
  const users = await db.get("users");

  const updatedUser = await users.update(
    { email: "gary@shayoo.ie" },
    { $set: { maxDrinkingDays: 50, drinkingDaysSoFar: 44 } }
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(updatedUser));
}
