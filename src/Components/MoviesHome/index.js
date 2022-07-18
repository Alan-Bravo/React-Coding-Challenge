import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { MapItems } from './MapItems';
import { FaLongArrowAltRight } from "react-icons/fa";
import './MoviesHome.css';

//ESTA ES LA VISTA DE LA HOME.
//SE LLAMA AL COMPONENTE DE VALORACION DE ESTRELLAS Y AL MAPITEMS.

const MoviesHome = () => {

const [rat, setRat] = useState(null);

  return (
    <>
    <StarRating setRating={setRat} rat={rat}/>
      <div className='moviesHome'>
          <div className='titleHomeMovies'>
              <h3>Aclamadas por el público</h3>
              <a href='#' className='seeAll'>Ver todas <FaLongArrowAltRight /></a>
          </div>
          <div className='mItemsHome'>
            <MapItems rat={rat}/>
          </div>
      </div>
    </>
  )
}

export default MoviesHome;