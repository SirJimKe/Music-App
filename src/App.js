import React, { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Favorites from './Components/Favorites';
import MusicDetails from './MusicDetails';

function App() {

  const [songs, setSongs] = useState([]);
  const [show, setShow] = useState(false);
  const [endPoint, setEndPoint] = useState('');

  useEffect(()=>{
    fetch(`http://localhost:8002/music?q=${endPoint}`)
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
          <Browse songs={songs}  />
        </Route>
        <Route path="/browse/:id" >
          <MusicDetails  />
        </Route>
        <Route path="/favorites">
          <Favorites songs={songs.filter(song=> song.isFavorite)}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
