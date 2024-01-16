import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
     <Header />
      <div className='container'>
        <Switch>
          <Route path='/'exact component={Home} />
          <Route path='/movie/:imdbID' component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
