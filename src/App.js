import React, { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Favorites from './Components/Favorites';

function App() {

  const [songs, setSongs] = useState([]);
  const [endPoint, setEndPoint] = useState('');

  useEffect(()=>{
    fetch(`http://localhost:8001/music?q=${endPoint}`)
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
      />
      <Navbar />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/browse" >
          <Browse songs={songs}/>
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
