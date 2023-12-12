import React from 'react'
import { NavBar, Header, Featured, FavBook, PromoBanner, OtherBooks, Review, TheFooter } from '../components'

const Home = () => {
  return (
    <section>
      <NavBar />
      <Header />
      <Featured />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
      <TheFooter />
    </section>
  )
}

export default Home
