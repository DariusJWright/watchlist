import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Popular from './components/Popular';


function App() {
  return (
    <>
      <Header />
      <Search />
      <Popular />
      <div className='footer-spacer'></div>
      <Footer />
    </>
  );
}

export default App;
