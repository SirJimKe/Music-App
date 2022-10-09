import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const MusicDetails = () => {
    const [song, setSong] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        fetch(`https://my-musiq-app.herokuapp.com/music/${id}`)
        .then(response => response.json())
        .then(setSong);
    }, [id])

    if (!song) return <h2>Loading...</h2>;

    console.log(song)

    const artists = song.artists.map(artist =>{
        return <h4><span key={id}></span>{artist}</h4>
    })
  return (
    <div className='music-details'>
        <img src={song.images} alt={song.title}/>
        <h2> Title: {song.title} </h2>
        <h3>Artists Names:</h3>
        {artists}
        <p>...Lyrics will be made available soon...<br/> Stay connected </p>
    </div>
  )
}

export default MusicDetails;