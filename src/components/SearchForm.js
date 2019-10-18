import React, { useState } from "react";


const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("props", props);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const results = props.name.filter(char => 
      char.name.toLowerCase().includes(searchTerm.toLowerCase()))
      
  }

  return (
    <section className="search-form">
      <form type="submit">
      <input 
        type="text"
        name="search"
        placeholder="search"
        value={searchTerm}
        onChange={handleChange}
      /><br />
      <button onSubmit={handleSubmit}>Search</button>
      </form>
    </section>
  );
}
export default SearchForm

// How do you submit a form?

// What is it your trying to filter thru and where do you need to filter?

// Console.log props
