import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schemas/*",
  out: "./drizzle",
} satisfies Config;
