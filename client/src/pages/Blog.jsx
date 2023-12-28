import React from 'react'
import { NavBar, TheFooter } from '../components'

const Blog = () => {
  return (
    <div>
      <NavBar />
      
      <div className='px-10 md:px-20 py-20 md:pt-20 md:pb-20 min-h-screen'>
        <h2 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5] text-center'>
          Blog
        </h2>
      </div>

      <TheFooter />
    </div>
  )
}

export default Blog
