import db from "../utils/db";

export default async function handler(req, res) {
  const users = await db.get("users");

  const { name, maxDrinkingDays, drinkingDaysSoFar } = req.body;

  await users.update(
    { email: "gary@shayoo.ie" },
    { $set: { name, maxDrinkingDays, drinkingDaysSoFar } }
  );

  res.redirect("/");
}
