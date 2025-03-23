import sql from "sqlite";
const database = new sql.Database("./src/db/skrem.sqlite");

database.run(`CREATE TABLE IF NOT EXISTS skrem (
    id INTEGER PRIMARY KEY,
    producer TEXT, 
    fname TEXT)`
);

export { database };