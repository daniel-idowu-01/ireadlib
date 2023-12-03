import React from 'react'
import { Header, Featured, FavBook, PromoBanner, OtherBooks, Review } from '../components'

const Home = () => {
  return (
    <section>
      <Header />
      <Featured />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </section>
  )
}

export default Home
