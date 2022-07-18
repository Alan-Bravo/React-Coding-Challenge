import React from 'react';
import DetailModal from './DetailModal';
import './MoviesHome.css';

//ACA ESTA LA VISTA DE LOS ITEMS QUE SE MUESTRAN EN LA HOME, JUNTO CON LA LLAMADA AL MODAL.

const MoviesItemsHome = (props) => {
  const { img } = props;
  return (
    <>
      <div className='itemsHome'>
          <img src={`https://image.tmdb.org/t/p/w154${img}`} alt="Banner" />
          <DetailModal {...props} />
      </div>
    </>
  )
}

export default MoviesItemsHome