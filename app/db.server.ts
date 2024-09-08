import * as schema from "~/db/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://testdb_owner:rZ9nsTS1kDpU@ep-quiet-term-a51dicds.us-east-2.aws.neon.tech/testdb?sslmode=require"
);

const db = drizzle(sql, {
  schema,
});

export default db;
