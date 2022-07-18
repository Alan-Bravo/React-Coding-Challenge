import React, { useState } from 'react';
import './MoviesHome.css';

//ESTE ES EL MODAL PARA VER MAS DETALLES DE LAS PELICULAS.

const DetailModal = ({img, title, overview, relDate}) => {

const [open, setOpen] = useState(false);

const closeModal = () => {
    setOpen(false);
}
const openModal = () => {
    setOpen(true);
}
    
  return (
    <div>
        <button className='btnVerMasModal' onClick={openModal}>Ver más</button>
        {
            open && (
                <div className='modalMovies'>
                    <div className='viewModal'>
                        <div className='headerModal'>
                            <h2>{title}</h2>
                        </div>
                        <button className='btnCloseModal' onClick={closeModal}>
                            <span>X</span>
                        </button>
                        <div className='imageAndDetail'>
                            <img src={`https://image.tmdb.org/t/p/w342${img}`} alt="imgModal" />
                            <div className='detailAndDate'>
                                <p>{overview}</p>
                                <p>Release Date: {relDate}</p>
                            </div>
                        </div>

                        <div className='btnCloseModalDetail'>
                            <button className='btnCerrar' onClick={closeModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default DetailModal;