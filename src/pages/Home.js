import React from 'react'
import CelebrationIcon from '@mui/icons-material/Celebration'

 const Home = () => {
  return (
     <div className='h-screen flex justify-center items-center'>
       <CelebrationIcon sx={{ fontSize: "100px" }} />
       <h1 className='text-4xl font-bold mx-10 border-y-4 py-2 border-black' style={{fontFamily : 'Playfair Display'}}>
         Classic Event
       </h1>
       <CelebrationIcon sx={{ fontSize: "100px", transform: "rotate(270deg)" }} />
     </div>
  )
}

export default Home;