import React from 'react'
import loader from './loader.gif'
function Spinner() {
  return (
    <div className='flex justify-center items-center'>
        <img src={loader} alt="loading..."/>
    </div>

  )
}

export default Spinner