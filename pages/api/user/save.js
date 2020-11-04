import monk from "monk";

export default async function handler(req, res) {
  const db = monk(process.env.DATABASE_URL);
  const users = await db.get("users").find();

  console.log(users);

  db.close();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(users));
}
