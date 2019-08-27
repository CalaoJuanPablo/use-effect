import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('')
  
  const handleSubmit = query => {
    const fetchUrl = `https://hn.algolia.com/api/v1/search?query=${query}`
    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => console.log(data.hits))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit(query)
      }}>
        <input
          type="text"
          placeholder="'react'"
          value={query}
          onChange={e => {setQuery(e.target.value)}} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
