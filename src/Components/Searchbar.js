import React from 'react';
 
const Searchbar = () => {
  return (
    <div>
        <form>
            <input 
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