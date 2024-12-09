import { db } from '../db'
import { topics as topicsTable } from '../db/schema'

export default async function Home() {
  const topics = await db.select().from(topicsTable)

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>Pagination</h1>

      {topics && topics.length ? (
        topics.map((topic) => (
          <div key={topic.id}>
            <h2 className='text-2xl'>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))
      ) : (
        <p>No topics found.</p>
      )}
    </div>
  )
}
