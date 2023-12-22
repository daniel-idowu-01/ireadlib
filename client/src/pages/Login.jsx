import React from 'react'
import { Link } from 'react-router-dom';
import { FloatingLabel, Button } from 'flowbite-react';

const Login = () => {
  return (
    <div className='min-h-screen py-6 flex-col justify-center sm:py-12'>
      <div className='shadow-md relative py-3 w-1/3 sm:mx-auto rounded-md'>
        <form action="" className='p-10 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold text-center mb-10'>Sign in to your account</h2>
          <FloatingLabel variant="outlined" label="Email" />
          <FloatingLabel variant="outlined" label="Password" />
          <Button type='submit'>Login</Button>
          
          <p>
            Don't have an account?
            <Link
              to='/sign-up'
              className='text-blue-500 underline ml-1 hover:opacity-80'
            >
              Create an account
            </Link>
          </p>
        </form>

        <div>
        </div>

      </div>
    </div>
  )
}

export default Login
