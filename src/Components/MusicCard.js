import React from 'react'
import {Link} from "react-router-dom"

const MusicCard = ({ id, song }) => {
  return (
    <>
        <div className='music-card'>
            <img src={song.images} alt={song.title}/>
            <h4> {song.title} </h4>
            <p>{song.subtitle} </p>
            <div>
              <input type="checkbox" name="favorite" id="add-fav"/>
              <label htmlFor="add-fav">Favorite</label>
            </div>
            <Link to={`/browse/${id}`}> See Details</Link>
        </div>
    </>    
  )
}

export default MusicCard;