import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const Table = sqliteTable("skrem", {
    id: integer("id").primaryKey(), 
    producer: text("producer").notNull(),
    name: text("name"),
});