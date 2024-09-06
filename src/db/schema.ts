import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const onRampStatusEnum = pgEnum("onramp", [
  "success",
  "failed",
  "processing",
]);

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).unique(),
  password: varchar("password", { length: 256 }),
});

export const balance = pgTable("balance", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  locked: integer("locked"),
  userId: integer("user_id").references(() => user.id),
});

export const onRampTransaction = pgTable("on_ramp_transaction", {
  id: serial("id").primaryKey(),
  status: onRampStatusEnum("onramp"),
  token: varchar("token", { length: 256 }),
  provider: varchar("provider", { length: 256 }),
  amount: integer("amount"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const p2pTransfer = pgTable("p2pTransfer", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  fromUserId: integer("from_user_id").references(() => user.id),
  toUserId: integer("to_user_id").references(() => user.id),
});
