import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://testdb_owner:rZ9nsTS1kDpU@ep-quiet-term-a51dicds.us-east-2.aws.neon.tech/testdb?sslmode=require",
  },
});
