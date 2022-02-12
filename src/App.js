//import './App.css';
import All from './Component/All';
import Navigation from './Component/Navigation';
import {Routes, Route} from 'react-router-dom';
import MovieList from './Component/MovieList';
import Home from './Component/Home';
import bootstrap from 'bootstrap';

function App() {
    
  return (
    <div className="App">
      {/*<header className="App-header">
       <AddMovie myMovie={addNewMovie}/>
       <Navigation/>
       <All/>
      </header>
      <div>
        
       <MovieList movie={movie}/>
      </div>*/}
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addmovies' element={<All/>} />
        <Route path='/listfilms' element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;
