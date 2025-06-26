import React from 'react'

function Card() {
  return (
    <div className='bg-zinc-200 w-full h-screen'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden '>
      <div className='w-full h-32 bg-zinc-300'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D' alt='Card Image'/>
      </div>
      <div className='w-full px-4 py-4'>
        <h2 className='font-bold font-sans'>Amazon Basics.</h2>
        <p className='text-xs mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi amet necessitatibus.</p>
      </div>
      
      </div>
    </div>
  )
}

export default Card
