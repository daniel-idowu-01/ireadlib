import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  // links on the navigation bar
  const navLinks = [
    {
      "title": "Home",
      "path": ""
    },
    {
      "title": "About",
      "path": "about"
    },
    {
      "title": "Shop",
      "path": "shop"
    },
    {
      "title": "Sell Your Book",
      "path": "sell-your-book"
    },
    {
      "title": "Blog",
      "path": "blog"
    }
  ]

  return (
    <nav className='px-10 sm:px-20 py-5 border'>
      <section className='flex items-center justify-between'>
        <div>
          <p className='border-r-2 rounded-full border-orange p-2'>
            TECH<span className='text-orange'>BOOKS</span>
          </p>
        </div>

        <div className='hidden sm:block space-x-10'>
          {
            navLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path}`}
                className='hover:opacity-80 hover:cursor-pointer'
              >
                {link.title}
              </Link>
            ))
          }
        </div>

        <div>
          =
        </div>
      </section>
    </nav>
  )
}

export default NavBar
