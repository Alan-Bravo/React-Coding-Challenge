import React, { useState } from 'react';
import MapsItemsSearch from './MapsItemsSearch';
import useFetchMovies from '../hooks/useFetchMovies';
import StarRating from '../StarRating/StarRating';
import './MoviesView.css';

//ESTA ES LA VISTA QUE APARECE LUEGO DE REALIZAR UNA BUSQUEDA EN LA SEARCH BAR.
//SE USA EL HOOK EN EL QUE SE TRAEN LOS DATOS DE LA LLAMADA A LA API Y TAMBIEN SE INVOCA A LA VALORACION DE ESTRELLAS.

const MoviesView = ({ title }) => {

  const [rat, setRat] = useState(null);
  const { isLoading } = useFetchMovies(title);

  return(
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className='filterSearchByRat'>
        <StarRating setRating={setRat} rat={rat}/>
      </div>
      <div className='cardGrid'>
        <MapsItemsSearch rat={rat} title={title} />
      </div>
    </>
  )
}

export default MoviesView;
