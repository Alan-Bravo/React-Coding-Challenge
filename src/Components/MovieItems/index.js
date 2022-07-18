import React from 'react';
import DetailModal from '../MoviesHome/DetailModal';
import './MovieItems.css';

//ESTOS SON LOS ITEMS QUE SE MUESTRAN CUANDO SE REALIZA UNA BUSQUEDA.

const MovieItems = (props) => {

  const { img, title } = props;

  return (
    <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w154${img}`} alt={title} />
        <DetailModal {...props} />
    </div>
  )
}

export default MovieItems;