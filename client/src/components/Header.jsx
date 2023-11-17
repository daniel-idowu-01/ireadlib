import React from 'react'
import Banner from './Banner'

const Header = () => {
  return (
    <section
      className='flex flex-col sm:flex-row w-full items-center justify-between px-10 sm:px-20 py-10 sm:py-20 bg-orange bg-opacity-10'
    >
      <article className='sm:w-1/2 flex flex-col gap-8'>
        <h3 className='font-semibold text-3xl sm:text-5xl leading-snug sm:leading-[1.5]'>
          Buy and Sell Your Books <span className='text-orange'>for the Best Prices</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lacus vestibulum sed arcu non odio euismod lacinia. Mi tempus imperdiet nulla malesuada.
        </p>

        <div>
          <input
            type="text" name="" id=""
            placeholder='Search a book'
            className='bg-white outline-none px-4 py-2'
          />
          <button className='bg-orange px-6 py-2 hover:bg-opacity-50 transition-all'>
            Search
          </button>
        </div>

      </article>
      
      <article> 
        <Banner /> 
      </article>
    </section>
  )
}

export default Header
