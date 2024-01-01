import React from 'react'
import ProfileImage from '../assets/images/profile.jpg'
import { Link } from 'react-router-dom'

const BlogComp = () => {
  return (
    <section className='w-80 border rounded-md shadow-sm hover:cursor-pointer'>
      <img src={ProfileImage} alt="" />
      <div className='p-2'>
        <p className='text-2xl font-bold'>Blog Title</p>
        <p className='mt-1 opacity-50'>Blog text Blog text Blog text Blog text Blog text Blog text...</p>
      </div>
    </section>
  )
}

export default BlogComp
