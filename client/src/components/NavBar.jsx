import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [sidebar, setSideBar] = useState(false)

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
    <nav className=' bg-orange bg-opacity-10'>
      <section className='px-10 sm:px-20 py-5 flex items-center justify-between'>
        <div>
          <p className='border-r-2 rounded-full border-orange p-2'>
            TECH<span className='text-orange'>HUB</span>
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

        <div onClick={() => setSideBar(!sidebar)}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </div>
      </section>

      {/* sidebar */}
      <section
        className={`${sidebar ? '-left-0' : '-left-1/2'} transition-all absolute w-1/2 top-0 h-screen sm:hidden bg-red-500 z-20`}
      >
        <div className='relative top-14 flex flex-col gap-10'>
          {
            navLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path}`}
                className='hover:opacity-80 hover:cursor-pointer mx-auto'
              >
                {link.title}
              </Link>
            ))
          }
        </div>
      </section>
    </nav>
  )
}

export default NavBar
