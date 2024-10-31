import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//importing pages
import Home from './Pages/Home'
import MovieInfo from './Pages/MovieInfo'
import Header from './Components/Header/Header'
import AddMovie from './Pages/AddMovie'

//importing interceptor
import fetch from './interceptor';
import { ChangeMovieDetails } from './Pages/ChangeMovieDetails'
import RemoveMovie from './Pages/RemoveMovie'

export const context = React.createContext();

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch.get('/get-all-movies')
      .then(response => setMovies(response.data))
      .catch(err => console.log(err));

      console.log(movies);
    }, [])

  return (
    <context.Provider value={[movies, setMovies]}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='MovieInfo/:id' element={<MovieInfo />} />
          <Route path='/addMovie' element={<AddMovie />} />
          <Route path='/ChangeMovie' element={<ChangeMovieDetails />} />
          <Route path='/RemoveMovie' element={<RemoveMovie />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
