import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(response => {
      console.log("chars", response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("error", error);
    });
  }, [setCharacters]);

  return (
    <div>
    <SearchForm characters={characters} />
    <section className="character-list">
      {characters.map(char => {
        return (
          <CharacterCard 
            key={char.id}
            name={char.name}
            status={char.status}
            location={char.location.name}
            imgURL={char.image}
          />
        );
      })}
    </section>
    </div>
  );
}
