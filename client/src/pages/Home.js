import { useState } from 'react';
import { searchMoviesByName } from '../utils/api';
import Movies from '../components/Movies';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = event => {
    setSearchText(event.target.value);
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    const data = await searchMoviesByName(searchText);
    setSearchResults(data);
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
            onChange={handleChange}
          />
          <button className='btn' type='submit' onSubmit={handleFormSubmit}>Search</button>
        </form>
      </div>
      <Movies movies={searchResults} />
    </div>
  )
}

export default Home;