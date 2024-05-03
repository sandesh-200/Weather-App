import { useState,useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Box from './Box/Box'
import './App.css'

function App() {
  const [town, setTown] = useState("japan")

  const handleCityFromBox = (data)=>{
    setTown(data)
  }

  useEffect(() => {
      fetch(`https://api.unsplash.com/search/collections?page=1&query=${town}&client_id=yQkGIg_TxEqLE2wgfHnQqldQ9kKoyACZoJ62wlRbjb8`)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        console.log(data.results[0].cover_photo.urls.full)
        setTown(data)
      })
  }, [])
  

  return (
    <div className='flex flex-col justify-center items-center my-40 text-white'>
    <Navbar />
    <Box onCityChange={handleCityFromBox}/>
    </div>
  )
}

export default App
