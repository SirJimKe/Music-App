import React, { useState } from 'react'

const AddMusic = ({addSong}) => {

  const [images, setImages] = useState("");
  const [title, setTitle] =  useState("");
  const [subtitle, setSubtitle] = useState("");
  const [artists, setArtists] = useState("Ops! Artists names not available");
  const [favorite, setFavorite] = useState(true);

  console.log(setArtists);
  console.log(setFavorite);


  const handleSubmit = (e) => {
    e.preventDefault();
    const musicObj = { 
      images: images,
      title: title,
      subtitle: subtitle,
      artists: artists,
      favorite: favorite
    }

    fetch("https://my-musiq-app.herokuapp.com/music", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(musicObj)
    })
    .then(res => res.json())
    .then(data => addSong(data))
  }

  return (
    <div className='addform' id="addmusic">
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input 
          className='addform-input' 
          type="text" name="images" 
          placeholder="A valid image url..." 
          onChange={(e) => setImages(e.target.value)}
        />
        <label>Title:</label>
        <input  
          className='addform-input' 
          type="text" name="title" 
          placeholder='Music title' 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Subtitle:</label>
        <input 
          type="text" 
          name="subtitle" 
          placeholder='artists e.g. Rihana & Beyonce' 
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <button className='addform-input' >Add New Music</button>
      </form>
    </div>
  )
}

export default AddMusic;