import React from 'react'

const BookCard = ({ _id, imageURL, authorName, bookTitle }) => {
  return (
    <article key={_id} className='w-[70%] sm:w-56 border rounded-md shadow-md mx-auto'>
      <img src={imageURL} className='w-full h-80' alt="" />
      <div className='p-2 flex flex-col gap-1 mt-2'>
        <h3 className='text-sm font-semibold'>{bookTitle}</h3>
        <p className='text-sm'>{authorName}</p>
      </div>
    </article>
  )
}

export default BookCard
