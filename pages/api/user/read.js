import db from "../utils/db";

export default async function handler(req, res) {
  const user = await db.get("users").findOne({ email: "gary@shayoo.ie" });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
}
