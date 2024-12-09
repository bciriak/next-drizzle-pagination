import { sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const topics = sqliteTable('topics', {
  id: int('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
})
