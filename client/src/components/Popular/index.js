import { useState, useEffect } from 'react';
import { getPopularMovieData } from '../../utils/api';

const Popular = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(async () => {
    const data = await getPopularMovieData();
    setPopularData(data);
  }, []);

  return (
    <div className='popular-container'>
      {popularData.map(movie => (
        <div className='popular'>
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