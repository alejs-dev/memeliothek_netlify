import sql from "sqlite3";
const database = new sql.Database("./netlify/functions/db/skrem.sqlite3");

database.run(`CREATE TABLE IF NOT EXISTS skrem (
    id INTEGER PRIMARY KEY,
    producer TEXT, 
    name TEXT)`
);

export { database };