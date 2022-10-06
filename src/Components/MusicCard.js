import React from 'react'

const MusicCard = ({ song }) => {
  return (
    <>
        <div className='music-card'>
            <img src={song.images} alt={song.title}/>
            <h4> {song.title} </h4>
            <p>{song.subtitle} </p>
        </div>
    </>    
  )
}

export default MusicCard