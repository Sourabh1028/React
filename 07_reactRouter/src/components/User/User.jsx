import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL
  const { userid } = useParams();
  return (
    <div className='bg-yellow-700 text-3xl p-4 text-white'>User: {userid}</div>
  )
}

export default User