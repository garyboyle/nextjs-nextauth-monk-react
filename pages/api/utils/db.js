import monk from "monk";

const db = monk(process.env.DATABASE_URL);

export default db;
