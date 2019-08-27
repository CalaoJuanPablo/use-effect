import React, { useState } from 'react';
import './App.css';

const handleSubmit = query => {
  console.log(query)
}

function App() {
  const [query, setQuery] = useState('')
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
