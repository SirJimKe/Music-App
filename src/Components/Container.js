import React from 'react'
import MusicCard from './MusicCard'

const Container = ({songs}) => {

  const musicList = songs.map((song)=>{
    
    return <MusicCard
      key={song.id}
      song={song}      
    />
  })

  return (
    <div className='container'>
      {musicList}
    </div>
  )
}

export default Container