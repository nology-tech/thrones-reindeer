import { useState, useEffect } from 'react';
import './App.css';
import CharacterContainer from './containers/CharacterContainer/CharacterContainer';
import Nav from './containers/Nav/Nav';

const App = () => {
  const [charArray, setCharArray]= useState([]);

  const getCharacters = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await response.json()
    console.log(data)
    setCharArray(data)
  }

  const getSearchTerm = (event) =>{
    console.log(event.target.value)
  }

useEffect(()=>{
  getCharacters()
},[])

  return (

    <div className="App">
      <Nav getSearchTerm={getSearchTerm}/>
      <CharacterContainer charArray={charArray}/>
    </div>
  );
}

export default App;
