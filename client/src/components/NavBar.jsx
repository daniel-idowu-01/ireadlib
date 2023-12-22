import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const NavBar = () => {

  const [sidebar, setSideBar] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [])

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
      "path": "admin/dashboard"
    },
    {
      "title": "Blog",
      "path": "blog"
    }
  ]

  return (
    <nav className='bg-transparent fixed top-0 left-0 right-0 z-20'>
      <section
        className={`px-10 md:px-20 py-5 flex items-center justify-between ${isSticky ? 'sticky top-0 bg-white' : ''}`}
      >
        <div>
          <p className='border-r-2 rounded-full border-orange p-2'>
            TECH<span className='text-orange'>HUB</span>
          </p>
        </div>

        {/* navbar for desktop view */}
        <div className='hidden md:block space-x-10'>
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
        <div>
          {
            user ? user.email : ''
          }
        </div>
      </section>

      {/* sidebar for mobile view */}
      <section
        className={`${sidebar ? '-left-0' : '-left-1/2'} transition-all absolute w-1/2 top-0 h-screen md:hidden bg-white z-20`}
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
