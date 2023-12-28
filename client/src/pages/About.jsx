import React from 'react'
import { NavBar, TheFooter } from '../components'

const About = () => {

  // data
  const data = [
    {
      num: '3.5',
      text: 'Years Experience'
    },
    {
      num: '23',
      text: 'Project Challenge'
    },
    {
      num: '8300+',
      text: 'Posiive Reviews'
    },
    {
      num: '100K',
      text: 'Trusted Students'
    },
  ]

  // team member images
  const image_links = [
    {
      link: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMG1lbWJlcnN8ZW58MHx8MHx8fDA%3D'
    },
    {
      link: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww'
    },
    {
      link: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fHww'
    },
    {
      link: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D'
    },
    {
      link: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww'
    },
    {
      link: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW0lMjBtZW1iZXJzfGVufDB8fDB8fHww'
    },
  ]

  return (
    <div>
      <NavBar />
      
      <div className='px-10 md:px-20 py-20 md:pt-20 md:pb-20 min-h-screen'>
        <h2 className='font-semibold text-3xl md:text-5xl leading-snug md:leading-[1.5] text-center'>
          About Us
        </h2>

        <div className='mt-5'>
          {/* Header */}
          <section className='flex flex-col md:flex-row justify-between gap-5'>
            {/* first column */}
            <article className='md:w-1/2 shadow-md p-10 rounded-xl flex flex-col justify-between'>
              <div>
                <p className='text-orange'>How It Started</p>
                <p className='text-3xl md:text-5xl font-bold leading-snug mt-2'>Our dream is global learning transformation</p>
              </div>

              <div className='mt-10 leading-loose'>
                Welcome to iREAD: Your Premier Destination for Digital Reading Delights! Immerse Yourself in a World of Knowledge and Imagination at Our Cutting-Edge E-Library. Explore Endless Pages, Engage with Timeless Classics, and Discover New Horizons in the Digital Realm. Unleash the Power of Words with BookByte Boulevard – Where Every Click Opens a Gateway to Infinite Stories.
              </div>
            </article>
            
            {/* second column */}
            <article className='md:w-1/2 flex flex-col gap-5'>
              <div>
                <img
                  className='rounded-xl w-full'
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>

              <div className='grid grid-cols-2 gap-2 shadow-md rounded-xl p-5'>
                {
                  data.map(item => (
                    <div className='p-5 bg-gray-50  rounded-xl'>
                      <p className='text-xl font-bold'>{item.num}</p>
                      <p>{item.text}</p>
                    </div>
                  ))
                }
              </div>
            </article>
          </section>

          {/* Our Team Members */}
          <section className='shadow-md p-10 mt-5'>
            <div>
              <p className='text-orange'>Meet The Team</p>
              <p className='md:w-1/2 text-3xl font-bold leading-snug mt-2'>
                Meet Our Dedicated Team Of Educators and Innovators
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-2'>
              {
                image_links.map(link => (
                  <img src={link.link} alt='' className='rounded-xl' />
                ))
              }
            </div>
          </section>

          {/* Vision and Mission */}
          <section className='flex flex-col md:flex-row mt-10 gap-2'>
            <article className='p-5 rounded-xl bg-orange bg-opacity-10'>
              <p className='text-orange text-sm'>Our Vision</p>
              <p className='text-4xl font-bold leading-snug md:w-[70%]'>Empowering Lives Through Education</p>
              <p className='mt-5'>Our unwavering vision is to empower lives though accessible, high-quality education. By fostering a global community of lifelong learners, we aim to inspire personal growth, drive innovation, and shape a brighter future for all</p>
            </article>

            <article className='p-5 rounded-xl bg-orange bg-opacity-10'>
              <p className='text-orange text-sm'>Our Mission</p>
              <p className='text-4xl font-bold leading-snug md:w-[70%]'>Learning for All, Everywhere</p>
              <p className='mt-5'>Our unwavering vision is to empower lives though accessible, high-quality education. By fostering a global community of lifelong learners, we aim to inspire personal growth, drive innovation, and shape a brighter future for all</p>
            </article>
          </section>
        </div>
      </div>

      <TheFooter />
    </div>
  )
}

export default About
