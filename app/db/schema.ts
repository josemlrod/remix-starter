import { relations } from "drizzle-orm";
import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const usersRelations = relations(users, ({ many }) => ({
  tournaments: many(tournaments),
}));

export const tournaments = pgTable("tournaments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  hostId: integer("host_id").references(() => users.id),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const tournamentsRelations = relations(tournaments, ({ one }) => ({
  users: one(users, { fields: [tournaments.hostId], references: [users.id] }),
}));
