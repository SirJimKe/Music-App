import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/browse" >Browse</NavLink>
      <NavLink to="/favorites" >Favorites</NavLink>
    </nav>
  )
}

export default Navbar