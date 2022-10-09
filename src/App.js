import React, { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Favorites from './Components/Favorites';
import MusicDetails from './Components/MusicDetails';
import AddMusic from './Components/AddMusic';

function App() {

  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const [endPoint, setEndPoint] = useState('');

  useEffect(()=>{
    fetch(`https://my-musiq-app.herokuapp.com/music?q=${endPoint}`)
    .then(response => response.json())
    .then(setSongs);
  }, [endPoint])

  const onChangeHandler = (e) => {
    console.log("Searching...");
    setEndPoint(e.target.value.toLowerCase())
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setEndPoint("");
  }
  const updateFavorite = (id, favorite) => {
    setSongs(songs.map(song => id === song.id ? {...song, favorite} : song))
  }

  const addSong =(newSong) => {
    setSongs(...songs, newSong)
  }

  return (
    <div className="App">
      <Header 
        endPoint={endPoint}
        onChangeHandler= {onChangeHandler}
        submitHandler={submitHandler} 
        show={show}
        setShow={setShow} 
      />
      <Navbar setShow={setShow} />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/browse" >
          <Browse songs={songs} updateFavorite={updateFavorite} />
        </Route>
        <Route path="/browse/:id" >
          <MusicDetails  />
        </Route>
        <Route path="/favorites">
          <Favorites songs={songs.filter(song=> song.favorite)} updateFavorite={updateFavorite} />
        </Route>
        <Route path="/addmusic" >
          <AddMusic addSong={addSong} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
