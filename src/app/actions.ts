'use server'

import { count } from 'drizzle-orm'
import { db } from '../db'
import { topics as topicsTable } from '../db/schema'
import { PAGINATION_PER_PAGE_COUNT } from '../app-config'

export async function getTopics(pageNumber: number = 1) {
  const pageLimit = PAGINATION_PER_PAGE_COUNT

  const topics = await db
    .select()
    .from(topicsTable)
    .limit(pageLimit)
    .offset((pageNumber - 1) * pageLimit)

  const [topicsRows] = await db.select({ count: count() }).from(topicsTable)

  return { topics, topicsCount: topicsRows.count }
}
