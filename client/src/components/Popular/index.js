import { useState, useEffect } from 'react';
import { getPopularMovieData } from '../../utils/api';
import Card from '../Card';

const Popular = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  console.log(popularMovieData);
  useEffect(async () => {
    const data = await getPopularMovieData();
    setPopularMovieData(data);
  }, []);

  return (
    <div className='container'>
      <h2>Top 20 in USA</h2>
      {popularMovieData.map(movie => (
        <Card
            overview={movie.overview}
            posterPath={movie.poster_path}
            title={movie.title}
        />
      ))}
    </div>
  );
}

export default Popular;