import * as dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'

dotenv.config({ path: '.env.local' })

const client = createClient({
  url: process.env.DATABASE_URL!,
})
export const db = drizzle({ client })
