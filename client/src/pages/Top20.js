import { useState, useEffect } from 'react';
import { getPopularMovieData } from '../utils/api';
import Movies from '../components/Movies';

const Top20 = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  
  useEffect(async () => {
    const data = await getPopularMovieData();
    setPopularMovieData(data);
  }, []);

  return (
    <Movies popular={popularMovieData} />
  )
}

export default Top20;