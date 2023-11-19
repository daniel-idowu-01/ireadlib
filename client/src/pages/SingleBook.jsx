import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleBook = () => {

  const { id } = useParams();
  const [bookData, setBookData] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:5000/book/${id}`)
      .then(res => setBookData(res.data))
      .catch(error => console.log(error))
  }, [])

  console.log(bookData)


  return (
    <div>
      {id}
    </div>
  )
}

export default SingleBook
