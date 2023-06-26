import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import {InferModel} from "drizzle-orm";

export const users = pgTable('users', {
  userId: varchar('userId').primaryKey(),
  fullName: text('fullName'),
  email: varchar('email'),
});

export type User = InferModel<typeof users, "select">;
export type NewUser = InferModel<typeof users, "insert">;
