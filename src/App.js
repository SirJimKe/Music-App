import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import './App.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8001/music')
    .then(response => response.json())
    .then(setSongs);
  }, [])

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Container songs={songs}/>
    </div>
  );
}

export default App;
