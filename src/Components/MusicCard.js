import React from 'react'
import {Link} from "react-router-dom"

const MusicCard = ({ id, song, updateFavorite }) => {
  
  const { images, title, subtitle, favorite} = song;

  const handleFavorite =(favorite) => {
    fetch(`https://my-musiq-app.herokuapp.com/music/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({favorite: favorite})
    })
    .then(res => res.json())
    .then(data => updateFavorite(data.id, data.favorite))
   }

  return (
    <>
        <div className='music-card'>
            <img src={images} alt="Ops! Nothing to show"/>
            <h4> {title} </h4>
            <h5>{subtitle} </h5>
            <div>
              <label>Favorite?</label>
              <input 
                type="checkbox" 
                onChange={(e)=> handleFavorite(e.target.checked)}
                checked={favorite}/>
            </div>
            <p><Link to={`/browse/${id}`}> See Details</Link></p>
        </div>
    </>    
  )
}

export default MusicCard;