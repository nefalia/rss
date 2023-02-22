import axios from 'axios';
import { useEffect, useState } from 'react';
import Feed from './Feed';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get('http://localhost:8000');
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getArticles();
  }, [])

  return (
    <>
      <div className='header'>
        <h1>DI RSS</h1>
      </div>
      <ul className='cards'>
        {articles
          .slice(0,10)
          .sort((a, b) => new Date(b.item.pubDate) - new Date(a.item.pubDate))
          .map((item, i) => 
            <Feed 
              key={i}
              title={item.item.title}
              link={item.item.link}
              date={item.item.pubDate}
              content={item.item.contentSnippet}
            />
        )}
      </ul>
    </>
  );
}

export default App;
