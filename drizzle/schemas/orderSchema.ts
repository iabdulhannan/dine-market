import {integer, numeric, pgTable, serial, text, varchar} from "drizzle-orm/pg-core";
import {users} from "./usersSchema";

export const order = pgTable('order', {
  id: serial('id').primaryKey(),
  numberOfItems: integer('numberOfItems'),
  totalAmount: numeric('totalAmount'),
  userId: varchar('userId').references(() => users.userId)
});
