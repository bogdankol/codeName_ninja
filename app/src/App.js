import logo from './logo.svg';
import './App.css';
import {
  useEffect,
  useState
} from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import ListOfHeroesView from './views/ListOfHeroesView';
import EditHeroesView from './views/EditHeroesView';

function App() {

  return ( <div className="App">
    <Navigation />
     <Routes>
       <Route path="/listOfHeroes" element={<ListOfHeroesView  />} ></Route>
       <Route path="/editHeroes" element={<EditHeroesView />} ></Route>
     </Routes>
    </div>
  );
}

export default App;