import React, { useState, useEffect } from 'react';
import './App.css';

const useArticlesList = query => {
  const [articles, setArticles] = useState([])
  
  const fetchArticles = () => {
    const fetchUrl = `https://hn.algolia.com/api/v1/search?query=${query}`
    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => setArticles(data.hits))
      .catch(err => console.log(err))
  }

  useEffect(fetchArticles, [query])

  return articles
}

function App() {
  const [query, setQuery] = useState('')
  const [width, setWidth] = useState(window.innerWidth)

  const articles = useArticlesList(query)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="App">
      <h1>
        Width: {width}
      </h1>
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
