'use client'

import { useRouter } from 'next/navigation'

type Props = {
  page: number
  totalPages: number
}

export default function Pagination({ page, totalPages }: Props) {
  const router = useRouter()

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`)
  }

  return (
    <div className='flex justify-center my-4'>
      <button
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
        className='rounded border px-4 py-1 m-2 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'
      >
        {'<'}
      </button>
      {page !== 1 && (
        <button
          className='rounded border px-4 py-1 m-2 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      )}
      {page > 2 && (
        <button className='rounded border px-4 py-1 m-2 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'>
          ...
        </button>
      )}
      <button className='rounded border px-4 py-1 m-2 bg-gray-100 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'>
        {page}
      </button>
      {page < totalPages - 1 && (
        <button className='rounded border px-4 py-1 m-2 hover:cursor-default'>
          ...
        </button>
      )}
      {page !== totalPages && (
        <button
          className='rounded border px-4 py-1 m-2 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button
        disabled={page > totalPages - 1}
        onClick={() => handlePageChange(page + 1)}
        className='rounded border px-4 py-2 m-2 hover:bg-gray-100 disabled:text-gray-300 disabled:bg-white'
      >
        {'>'}
      </button>
    </div>
  )
}
