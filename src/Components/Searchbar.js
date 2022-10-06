import React from 'react';
 
const Searchbar = ({ endPoint, onChangeHandler, submitHandler }) => {
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input 
                value={endPoint}
                onChange={onChangeHandler}
                className='search'
                type="text"
                name="search"
                placeholder='Music...'
            />
            <button className='search'>Search</button>
        </form>
    </div>
  )
}

export default Searchbar