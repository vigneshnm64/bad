import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import PrimarySearchAppBar from './components/apibar/PrimarySearchAppBar';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([])

  // useEffects
  useEffect(() => {
    breakingBadApi()
  }, [])

  useEffect(() => {
    console.log('characters from useState', characters)
  }, [characters])

  // Functions
  const breakingBadApi = () => {
    axios.get('https://www.breakingbadapi.com/api/characters')
      .then((response) => {
        setCharacters(response.data)
      })
      .catch((err) => {
        console.log('breakingBadApi error', err)
      })
  }
  return (
    
    <div className='complete'>
      <div className='bar'>
        <PrimarySearchAppBar />
      </div>
      <div className="hero-image" >
        {
          characters && characters.map((data) => (
            <Card 
              key={data.char_id} 
              name={data.name} 
              role={data.portrayed} 
              charImg={data.img}
              dob={data.birthday}
            />
          ))
        }
      
      </div>
     
    </div>
  );
}

export default App;
