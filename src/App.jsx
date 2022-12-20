import { useState, useEffect } from "react";
import "./App.css";
import CharacterCards from "./containers/CharacterCards/CharacterCards";
import Nav from "./containers/Nav/Nav";
import { getCharacters } from "./services/services";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [houseFilters, setHouseFilters] = useState({
    targaryen: false,
    stark: false,
    lannister: false,
    baratheon: false,
  });

  const handleInput = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter(character => {
    const { family, fullName } = character;
    if (!fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    if (houseFilters.targaryen && !family.toLowerCase().includes("targaryen")) {
      return false;
    }

    if (houseFilters.stark && !family.toLowerCase().includes("stark")) {
      return false;
    }

    if (houseFilters.lannister && !family.toLowerCase().includes("lannister")) {
      return false;
    }

    if (houseFilters.baratheon && !family.toLowerCase().includes("baratheon")) {
      return false;
    }

    return true;
  });

  const handleCheckbox = event => {
    setHouseFilters(state => ({ ...state, [event.target.id]: event.target.checked }));
  };

  const displayCharacters = async () => {
    const characters = await getCharacters();
    if (!characters.error) {
      setCharacters(characters.data);
    }
  };

  useEffect(() => {
    displayCharacters();
  }, []);

  return (
    <div className="App">
      <Nav
        searchTerm={searchTerm}
        handleInput={handleInput}
        houseFilters={houseFilters}
        handleCheckbox={handleCheckbox}
      />
      <CharacterCards characters={filteredCharacters} />
    </div>
  );
};

export default App;
