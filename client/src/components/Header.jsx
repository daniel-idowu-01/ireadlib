import React from 'react'
import Banner from './Banner'

const Header = () => {
  return (
    <section
      className='flex flex-col md:flex-row gap-10 md:gap-0 w-full items-center justify-between px-10 md:px-20 py-32 md:py-40 bg-orange bg-opacity-10'
    >
      <article className='md:w-1/2 flex flex-col gap-8'>
        <h3 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5]'>
          Buy and Sell Your Books <span className='text-orange'>for the Best Prices</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumdod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lacus vestibulum sed arcu non odio euimdod lacinia. Mi tempus imperdiet nulla malesuada.
        </p>

        <div className='flex'>
          <input
            type="text" name="" id=""
            placeholder='Search a book'
            className='bg-white outline-none px-4 py-2'
          />
          <button className='bg-orange px-3 md:px-6 py-2 hover:bg-opacity-50 transition-all'>
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
