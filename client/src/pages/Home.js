import { useState, useEffect } from 'react';
import Movies from '../components/Movies';


const Home = () => {
  const [searchText, setSearchText] = useState('');
  
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
    </div>
  )
}

export default Home;