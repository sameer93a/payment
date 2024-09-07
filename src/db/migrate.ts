import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

// for migrations
const migrationClient = postgres(connectionString, { max: 1 });

// Run migrations
const main = async () => {
  try {
    await migrate(drizzle(migrationClient), { migrationsFolder: "./drizzle" });
    console.log("Migration complete");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1); // Exit with a failure code
  } finally {
    await migrationClient.end(); // Ensure the connection is closed
  }
};

main();
