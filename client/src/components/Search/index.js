import { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form className='search' onSubmit={handleFormSubmit}>
        <input 
          type='text'
          className='search-form'
          placeholder='Find a movie'
          value={searchText}
        />
        <button className='button' type='submit'>Search</button>  
      </form>
    </div>
  );
}

export default Search;