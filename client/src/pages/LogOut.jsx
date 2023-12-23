import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {

  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext)

  // function to log user out
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('Sign-out successful!');
        navigate('/login')
      })
      .catch((error) => {

      });
  }

  return (
    <div
      className='h-screen bg-orange bg-opacity-10 flex items-center justify-center'
    >
      <button
        className='bg-red-500 text-white px-8 py-2 rounded-md' onClick={handleLogOut}>
        Logout
      </button>
    </div>
  )
}

export default LogOut
