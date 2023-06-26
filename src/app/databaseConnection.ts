import {drizzle, PostgresJsDatabase} from "drizzle-orm/postgres-js";
import {migrate} from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// export let databaseConnection: null | PostgresJsDatabase = null;

export const connectToDatabase = async () => {
  // if (!databaseConnection) {
    // @ts-ignore
    const queryClient = postgres(process.env.DATABASE_URL, {ssl: "require"});
    const databaseConnection = drizzle(queryClient);
    // await migrate(databaseConnection, {migrationsFolder: "drizzle"});
      return databaseConnection
  // }
}
