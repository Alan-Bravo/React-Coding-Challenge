import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import Footer from './Footer/Footer.js';
import MoviesView from './MoviesViewSearch';
import MoviesHome from './MoviesHome';
import './MoviesApp.css';

// ESTE ES EL COMPONENTE PRINCIPAL, DONDE SE INVOCAN TODOS LOS COMPONENTES.

const MoviesApp = () => {

const [data, setData] = useState([]);
const [search, setSearch] = useState(false);

const onAddMovie = (onNewMovie) => {
  if(data.includes(onNewMovie)) return;
  setData([onNewMovie]);
  setSearch(true);
}

const onClickBack = () => {
  setSearch(false)
  setData([])
}

  return (
    <div>
      <div className='headerPage'>
        <div className='textBanner'>
          <h1>Tus peliculas favoritas.</h1>
          <h3>En un solo lugar.</h3>
        </div>
        <SearchBar
          onNewValue={(value) => {onAddMovie(value)}}
        />
      </div>
      <button 
        onClick={onClickBack} 
        className={ search ? "btn" : "btnNone"}
      > Volver
      </button>
      {
        search ? (
            data.map(t => (
              <MoviesView 
                key={t} 
                title={t} 
              />
            ))
          ) : (
            <MoviesHome />
          )
      }
      <Footer />
    </div>
  )
}

export default MoviesApp;
