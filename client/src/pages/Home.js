import { useState } from 'react';
import { searchMoviesByName } from '../utils/api';
import Movies from '../components/Movies';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState({});
  
  const handleChange = event => {
    setSearchText(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
  }
  
  console.log(searchText);
  
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
          <button className='btn' type='submit' onChange={handleChange}>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home;