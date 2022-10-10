import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MusicDetails = ({deleteSong}) => {
    const [song, setSong] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(()=>{
        fetch(`https://my-musiq-app.herokuapp.com/music/${id}`)
        .then(response => response.json())
        .then(setSong);
    }, [id])

    if (!song) return <h2>Loading...</h2>;

    const handleDelete = () => {
      fetch(`https://my-musiq-app.herokuapp.com/music/${id}`, {
        method: "DELETE"
      })
      .then(() => history.push('/browse'))
      deleteSong(id)
    }


    const artists = song.artists.map((artist) =>{
        return <span key={artist}><h4>{artist}</h4></span>
    })
  return (
    <div className='music-details'>
        <img src={song.images} alt={song.title}/>
        <h2> Title: {song.title} </h2>
        <h3>Artists Names:</h3>
        {artists}
        <p>...Lyrics will be made available soon...<br/> Stay connected </p>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default MusicDetails;