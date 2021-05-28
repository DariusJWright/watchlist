import { useState, useEffect } from 'react';
import axios from 'axios';

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4da80362321198baf93fcf91ea0ff3ca&language=en-US&page=1&region=US');
      setPopular(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(popular);
  return (
    <div className='popular-container'>
      {popular.map(movie => (
        <div className='popular'>
          {/* <h2>{movie.title}</h2> */}
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
            loading='lazy'
          />
        </div>
      ))}
    </div>
  );
}

export default Popular;