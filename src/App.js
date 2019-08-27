import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [articles, setArticles] = useState([])

  const fetchArticles = () => {
    const fetchUrl = `https://hn.algolia.com/api/v1/search?query=${query}`
    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => setArticles(data.hits))
      .catch(err => console.log(err))
  }

  useEffect(fetchArticles, [])

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
      }}>
        <input
          type="text"
          placeholder="'react'"
          value={query}
          onChange={e => {setQuery(e.target.value)}} />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {
          articles.map(article =>
            <li key={article.objectID}>
              <a href={article.url} target="_blank">
                {article.title}
              </a>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
