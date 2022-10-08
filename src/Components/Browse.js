import React from 'react'
import MusicCard from "./MusicCard"

const Browse = ({songs, handleClick}) => {
  const musicList = songs.map((song)=>{
      return <MusicCard
      key={song.id}
      song={song}
      id={song.id} 
      handleClick={handleClick}     
    />
  })

  return (
    <div id="browse" className='container'>
      {musicList}
    </div>
  )
}


export default Browse