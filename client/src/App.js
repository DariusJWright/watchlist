import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Header />
      <Home />
      <div className='footer-spacer'></div>
      <Footer />
    </>
  );
}

export default App;
