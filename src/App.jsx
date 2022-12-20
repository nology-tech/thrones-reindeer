import { useState, useEffect } from 'react';
import './App.css';
import CharacterContainer from './containers/CharacterContainer/CharacterContainer';
import Nav from './containers/Nav/Nav';

const App = () => {
  const [charArray, setCharArray]= useState([]);
  const [searchTerm, setSearchTerm]= useState("")

  const getCharacters = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const data = await response.json()
    console.log(data)
    setCharArray(data)
  }

  const getSearchTerm = (event) =>{
   setSearchTerm(event.target.value)
  }

  const filterCharacters = () => {
    const filteredArray = charArray.filter(character => {
      if((character.fullName.toLowerCase()).includes(searchTerm.toLowerCase())){
        return character;
      }
    })
    return filteredArray;
  }

useEffect(()=>{
  getCharacters()
},[])

  return (

    <div className="App">
      <Nav getSearchTerm={getSearchTerm}/>
      <CharacterContainer charArray={filterCharacters()}/>
    </div>
  );
}

export default App;
