import React from 'react'
import {Link} from "react-router-dom"

const MusicCard = ({ id, song, handleClick }) => {
  return (
    <>
        <div onClick={()=>handleClick(song.id)} className='music-card'>
            <img src={song.images} alt={song.title}/>
            <h4> {song.title} </h4>
            <h5>{song.subtitle} </h5>
            {song.favorite ? <p>Remove From Favorites</p> : <p>Add to Favorites</p> }
            <Link to={`/browse/${id}`}> See Details</Link>
        </div>
    </>    
  )
}

export default MusicCard;