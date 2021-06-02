import { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
  }

  return (
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
  );
}

export default Search;