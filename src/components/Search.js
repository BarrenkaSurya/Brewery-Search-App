import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lists from './Lists';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${query}`);
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Search by city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Lists results={results} />
      
    </div>
  );
};

export default Search;