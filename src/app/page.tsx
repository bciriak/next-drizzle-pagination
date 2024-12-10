import { SearchParams } from 'next/dist/server/request/search-params'
import Pagination from './_components/pagination'
import { getTopics } from './actions'
import { PAGINATION_PER_PAGE_COUNT } from '../app-config'
import { redirect } from 'next/navigation'

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const page = searchParams.page ? Number(searchParams.page) : 1

  const { topics, topicsCount } = await getTopics(page)
  const totalPages = Math.ceil(topicsCount / PAGINATION_PER_PAGE_COUNT)

  if (page > totalPages || page < 1) {
    redirect('/?page=1')
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl'>Pagination</h1>

      {topics && topics.length ? (
        <>
          {topics.map((topic) => (
            <div key={topic.id}>
              <h2 className='text-2xl'>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          ))}
          <Pagination page={page} totalPages={totalPages} />
        </>
      ) : (
        <p>No topics found.</p>
      )}
    </div>
  )
}
