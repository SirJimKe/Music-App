import React from 'react'
import Browse from './Browse'
import Favorites from './Favorites'

const Navbar = () => {
  return (
    <div className='nav'>
        <Browse />
        <Favorites/>    
    </div>
  )
}

export default Navbar