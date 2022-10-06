import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';

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
      <Container songs={songs}/>
    </div>
  );
}

export default App;
