import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({setShow}) => {
  return (
    <nav>
      <NavLink to="/browse" onClick={()=>setShow(true)} >Browse</NavLink>
      <NavLink to="/favorites" onClick={()=>setShow(true)}  >Favorites</NavLink>
    </nav>
  )
}

export default Navbar;