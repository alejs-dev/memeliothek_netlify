const sql = require("sqlite3").verbose();
const database = new sql.Database("./src/db/skrem.sqlite3");

database.run(`CREATE TABLE IF NOT EXISTS skrem (
    id INTEGER PRIMARY KEY,
    producer TEXT, 
    fname TEXT)`
);

export { database };