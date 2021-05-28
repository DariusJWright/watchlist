import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import { getPopularMovieData } from './utils/api';
import { useEffect } from 'react';

function App() {
  const getPopularMovies = useEffect(getPopularMovieData, []);
  
  return (
    <>
      <Header />
      <Search />
      <div className='footer-spacer'></div>
      <Footer />
    </>
  );
}

export default App;
