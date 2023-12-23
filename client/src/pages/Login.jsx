import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FloatingLabel, Button, Spinner } from 'flowbite-react';
import { AuthContext } from '../context/AuthProvider';
import google from '../assets/images/google-logo.svg'

const Login = () => {

  const navigate = useNavigate();
  const {login, loginWithGoogle} = useContext(AuthContext);
  const [formData, setFormData] = useState([]) 
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // function to update form data on user input
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // function to submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    login(formData.email, formData.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setIsLoading(false)
        alert('Login Successful!')
        navigate('/')
      })
      .catch((error) => {
        setIsLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }
  
  // function to login using google
  const handleGoogleRegister = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      alert('Account Created Successfully!')
      navigate('/');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }

  return (
    <div className='min-h-screen py-6 flex-col justify-center sm:py-12'>
      <div className='shadow-md relative py-3 w-1/3 sm:mx-auto rounded-md'>
        <form onSubmit={handleSubmit} className='p-10 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold text-center mb-10'>Sign in to your account</h2>
          <FloatingLabel variant="outlined" label="Email" name='email' onChange={handleFormChange} />
          <FloatingLabel variant="outlined" label="Password" name='password' onChange={handleFormChange} />
          {error ? <p className='text-sm text-red-500'>Email or password is not correct</p> : ''}

          <Button type='submit'>
            {isLoading ? <Spinner /> : 'Log In'}
          </Button>
          
          <p>
            Don't have an account?
            <Link
              to='/sign-up'
              className='text-blue-500 underline ml-1 hover:opacity-80'
            >
              Create an account
            </Link>
          </p>

          <div>
            <button
              onClick={handleGoogleRegister}
              className='flex justify-center items-center border-t mt-5 p-5 w-full rounded-md'>
              <img src={google} alt="" className='w-10 h-10 inline' /> Login With Google
            </button>
            
          </div>
        </form>

        <div>
        </div>

      </div>
    </div>
  )
}

export default Login
