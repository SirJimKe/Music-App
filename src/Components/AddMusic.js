import React from 'react'

const AddMusic = () => {
  return (
    <div className='addform'>
      <form>
        <label>Image:</label>
        <input className='addform-input' type="text" name="images" placeholder="Type image url..."/>
        <label>Title:</label>
        <input  className='addform-input' type="text" name="title" placeholder='Type music title'/>
        <label>Subtitle:</label>
        <input type="text" name="subtitle" placeholder='Type artists name...'/>
        <button className='addform-input' >Add New Music</button>
      </form>
    </div>
  )
}

export default AddMusic;