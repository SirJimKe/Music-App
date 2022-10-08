import { getByTitle } from '@testing-library/react'
import React, { useState } from 'react'

const AddMusic = ({addSong}) => {

  const [images, setImages] = useState("");
  const [title, setTitle] =  useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const musicObj = {
      images: images,
      title: title,
      subtitle: subtitle,
      favorite: true
    }

    fetch("http://localhost:8002/music", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(musicObj)
    })
    .then(res => res.json())
    .then(data => addSong(data))
  }

  return (
    <div className='addform'>
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input 
          className='addform-input' 
          type="text" name="images" 
          placeholder="Type image url..." 
          onChange={(e) => setImages(e.target.value)}
        />
        <label>Title:</label>
        <input  
          className='addform-input' 
          type="text" name="title" 
          placeholder='Type music title' 
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Subtitle:</label>
        <input 
          type="text" 
          name="subtitle" 
          placeholder='Type artists name...' 
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <button className='addform-input' >Add New Music</button>
      </form>
    </div>
  )
}

export default AddMusic;