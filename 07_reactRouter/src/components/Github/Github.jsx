import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])  
  useEffect(() => {
    fetch('https://api.github.com/users/Sourabh1028')  
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data)
    })
  }, [])

  return (
    <div className='text-center p-4 text-black'>Github followers: {data.followers}

    <img className='text-center' src={data.avatar_url} alt="Git profile photo" width={300} />
    </div>

  )
}

export default Github