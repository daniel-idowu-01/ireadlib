import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = () => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  /* if (loading) {
    return <div className='text-center'>
      <Spinner aria-label='Center-aligned spinner example' />
    </div>
  } */
 
  return (
    <div className='w-full'>
      {user ? <Outlet /> : navigate('/login')}
    </div>
  )
}

export default PrivateRoute
