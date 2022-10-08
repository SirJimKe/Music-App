import React from 'react';
import MusicCard from './MusicCard';

const Favorites = ({songs}) => {
  const musicList = songs.map((song)=>{
    
    return <MusicCard
      key={song.id}
      song={song}
      id={song.id}      
    />
  })
  return (
    <div id="favorites" className='nav_favorites container' >
        {musicList}
    </div>
  )
}

export default Favorites