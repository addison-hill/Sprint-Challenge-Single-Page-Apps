import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = props.filter(char =>
      char.toLowerCase().includes(searchTerm));
      setSearchResults(results)
  }, [searchTerm]);

  return (
    <section className="search-form">
      <input 
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange} />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  );
}
export default SearchForm
