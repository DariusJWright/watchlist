import { useState, useEffect } from 'react';
import { getPopularMovieData } from '../utils/api';
import Movies from '../components/Movies';


const Home = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(async () => {
    const data = await getPopularMovieData();
    setPopularMovieData(data);
  }, []);
  
  const handleFormSubmit = event => {
    event.preventDefault();
  }
  return (
    <div>
      <div className="search-form-container">
        <form className='search-form' onSubmit={handleFormSubmit}>
          <input
            type='text'
            className='search-form'
            placeholder='Find a movie...'
            value={searchText}
          />
          <button className='btn' type='submit'>Search</button>
        </form>
      </div>
      <Movies popular={popularMovieData} />
    </div>
  )
}

export default Home;