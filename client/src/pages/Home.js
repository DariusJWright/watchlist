import { useState, useEffect } from 'react';
import { getPopularMovieData } from '../utils/api';
import Movies from '../components/Movies';
import Search from '../components/Search';

const Home = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  console.log(popularMovieData);
  useEffect(async () => {
    const data = await getPopularMovieData();
    setPopularMovieData(data);
  }, []);

  return (
    <div>
      <Search />
      <Movies popular={popularMovieData}/>
    </div>
  )
}

export default Home;