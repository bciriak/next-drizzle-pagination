import { seed, reset } from 'drizzle-seed'
import { db } from '.'
import { topics } from './schema'

async function main() {
  await reset(db, { topics })
  await seed(db, { topics }).refine((f) => ({
    topics: {
      columns: {
        title: f.loremIpsum({ sentencesCount: 1 }),
        description: f.loremIpsum({ sentencesCount: 5 }),
      },
      count: 20,
    },
  }))
}

main()
