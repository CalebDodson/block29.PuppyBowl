import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import PlayerContainer from './components/PlayerContainer';
import PuppyDetails from './components/PuppyDetails';
import './App.css';

function App() {
  const [puppies,setPuppies] = useState([]);

    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-ET-WEB-FT/players`;

    const fetchAllPuppies = async () => {
        try {
            const response = await fetch(APIURL);
            const json = await response.json();
            const data = json.data.players;
            setPuppies(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      fetchAllPuppies();
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Form fetchAllPuppies={fetchAllPuppies} />
              <Search puppies={puppies} />
              <PlayerContainer puppies={puppies} setPuppies={setPuppies} fetchAllPuppies={fetchAllPuppies} />
            </>
          } 
        />          
        <Route 
          path="/puppy/:id"
          element={<PuppyDetails puppies={puppies} />}
        />
        <Route 
          path="/search-results/:searchName"
          element={<SearchResults puppies={puppies} />}
        />
      </Routes>
    </Router>
  )
}

export default App
