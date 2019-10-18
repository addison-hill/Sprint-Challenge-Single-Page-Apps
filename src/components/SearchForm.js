import React, { useState, useEffect } from "react";


const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  console.log("props", props);
  const {names} = props.characters.name;

  useEffect(() => {
    const results = names.filter(character =>
      character.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <section className="search-form">
      <form>
      <input 
        type="text"
        name="search"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
      /><br />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default SearchForm

// How do you submit a form?

// What is it your trying to filter thru and where do you need to filter?

// Console.log props

// const handleSubmit = event => {
//   event.preventDefault();
//   const results = props.name.filter(char => 
//     char.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
// }
