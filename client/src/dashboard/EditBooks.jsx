import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditBooks = () => {

  const { id } = useParams();
  const [bookData, setBookData] = useState([])
  const bookCategories = [
    'Fiction',
    'Non-fiction',
    'History',
    'Programming',
    'Science Fiction',
    'Fantasy',
    'Horror',
    'Business',
    'Bibliography',
    'Autobiography',
    'Self-help',
    'Memoir',
    'Children Books',
    'Travel',
    'Religion',
    'Art And Design'
  ]
  const [bookCategory, setBookCategory] = useState(bookCategories[0])

  useEffect(() => {
    axios.get(`https://tech-books-backend.onrender.com/book/${id}`)
      .then(res => setBookData(res.data))
      .catch(error => console.log(error))
  }, [])

  const handlebookCategory = (e) => {
    setBookCategory(e.target.value);
  }

  // handle book submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    // send data to database
    fetch(`https://tech-books-backend.onrender.com/book/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
      .then(res => res.json())
      .then(data => {
        alert('Book updated');
      })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>
        Update The Book
      </h2>

      <form onSubmit={handleFormSubmit} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        {/* first row */}
        <section className='flex gap-8'>
          {/* book title */}
          <article className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookData.bookTitle}
            />
          </article>

          {/* author name */}
          <article className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
              defaultValue={bookData.authorName}
            />
          </article>
        </section>

        {/* second row */}
        <section className='flex gap-8'>
          {/* image URL */}
          <article className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Book  Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              type="text"
              placeholder="Book Image URL"
              required
              defaultValue={bookData.imageURL}
            />
          </article>

          {/* Category */}
          <article className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="inputState"
                value="Book Category"
              />
            </div>

            <Select id='inputState' name='category' className='w-full rounded' value={bookCategory} onChange={handlebookCategory}>
              {bookCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>

          </article>
        </section>

        {/* third row */}
        <section>
          <div className="mb-2 block">
            <Label
              htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <Textarea
            id='bookDescription'
            name='bookDescription'
            placeholder='Write your book description...'
            required
            defaultValue={bookData.bookDescription}
            rows={6}
          />
        </section>

        {/* fourth row */}
        <section className=''>
          {/* image URL */}
          <article>
            <div className="mb-2 block">
              <Label
                htmlFor="bookPDFURL"
                value="Book PDF URL"
              />
            </div>
            <TextInput
              id="bookPDFURL"
              name='bookPDFURL'
              type="text"
              placeholder="Book PDF URL"
              defaultValue={bookData.bookPDFURL}
              required
            />
          </article>
        </section>

        <Button type='submit'>Update Book</Button>

      </form>
    </div>
  )
}

export default EditBooks
