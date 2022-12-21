// NAMED IMPORT -> FUNCTIONS
// - MULTIPLE THINGS FROM A FILE
import { useState, useEffect } from "react";
import { getCharacters } from "./services/services";
// DEFAULT IMPORT -> COMPONENTS DATA
// - ONE THING FROM A FILE
import CharacterCards from "./containers/CharacterCards/CharacterCards";
import Nav from "./containers/Nav/Nav";

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

  const handleCheckbox = event => {
    // console.log(event.target.id); OBJECT KEY -> targaryen
    // console.log(event.target.checked); TRUE OR FALSE
    // COPYING STATE AND UPDATING KEY
    setHouseFilters({ ...houseFilters, [event.target.id]: event.target.checked });
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

  // FILTER -> NEW ARRAY -> FILTERED ITEM
  // - RETURNS TRUE ADDED TO ARRAY
  // - RETURNS FALSE IS NOT ADDED
  const filteredCharacters = characters.filter(character => {
    const { family, fullName } = character;
    // CHECKING THE SEARCHTERM
    if (!fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // THIS IS FOR THE FAMILY CHECKBOX FILTER
    // IS THE HOUSE IS CHECKED && FAMILY DOESN'T INCLUDE "targaryen"
    // - DO NOT ADD IT TO THE NEW ARRAY
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

    // console.log(family);

    // MEANS IT CAN BE ADDED TO THE ARRAY
    return true;
  });

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
