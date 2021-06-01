import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      {/* <Home /> */}
      <Login />
      <div className='footer-spacer'></div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
