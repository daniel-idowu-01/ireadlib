import React from 'react'

const BookCard = ({ _id, imageURL, authorName, bookTitle }) => {
  return (
    <article key={_id} className='w-56 border'>
      <img src={imageURL} className='' alt="" />
      <div className='p-2'>
        <h3 className='text-sm font-semibold'>{bookTitle}</h3>
        <p className='text-sm'>{authorName}</p>
      </div>
    </article>
  )
}

export default BookCard
