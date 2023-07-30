var Pool = require("pg").Pool;

const client = new Pool({
  user: "muqoarur",
  host: "john.db.elephantsql.com",
  database: "muqoarur",
  password: "ygeTMLRWLvnJJUXEeKa9iUNKrrEbtv7T",
  port: 5432,
});

export default client;
