import React from 'react';
import MusicCard from './MusicCard';

const Favorites = ({songs, handleClick}) => {
  const musicList = songs.map((song)=>{
    
    return <MusicCard
      key={song.id}
      song={song}
      id={song.id} 
      handleClick={handleClick}          
    />
  })
  return (
    <div id="favorites" className='nav_favorites container' >
        {musicList}
    </div>
  )
}

export default Favorites