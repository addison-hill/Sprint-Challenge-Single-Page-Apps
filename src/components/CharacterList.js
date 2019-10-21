import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  const apiCall = async  () => {
    try{
        const {data:{results}} = await axios.get(`https://rickandmortyapi.com/api/character`)
      setCharacters(results)
      setSearchResults(results)

    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!



apiCall()




    // axios
    // .get(`https://rickandmortyapi.com/api/character`)
    // .then(response => {
    //   const chars = response.data.results;
    //   console.log("chars", chars);
    //   setCharacters(chars);
    //   setSearchResults(chars)
    // })
    // .catch(error => {
    //   console.log("error", error);
    // });
  }, [setCharacters]);

  return (
    <div>
    <SearchForm characters={characters} setCharacters={setCharacters} setSearchResults={setSearchResults} />
    <section className="character-list">
      {searchResults.map(char => {
        return (
          <CharacterCard 
            key={char.id}
            name={char.name}
            status={char.status}
            location={char.location.name}
          />
        );
      })}
    </section>
    </div>
  );
}
