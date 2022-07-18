import React from 'react';
import MovieItems from '../MovieItems';
import useFetchMovies from '../hooks/useFetchMovies';

//ESTE CODIGO NO ES MUY AGRADABLE DE VER. 
//ACA SE FILTRAN LAS PELICULAS CON LAS ESTRELLAS.

const MapsItemsSearch = ({title, rat}) => {
    const { img } = useFetchMovies(title);

    let theDataSearch = img.map(i => (
      <MovieItems key={i.id} {...i} />
    ));
  
    if(rat < 1 || rat === null) {
      return theDataSearch
    } else if(rat === 1) {
      return img.map(d => {
        if(d.rating >= 0 && d.rating <= 2) {
          return <MovieItems key={d.id} {...d} />
        } else {
            return null;
        }
      })
    } else if(rat === 2) {
      return img.map(dat => {
        if(dat.rating >= 2 && dat.rating <= 4) {
          return <MovieItems key={dat.id} {...dat} />
        } else {
            return null;
        }
      })
    } else if(rat === 3) {
        return img.map(dato => {
            if(dato.rating >= 4 && dato.rating <= 6) {
                return <MovieItems key={dato.id} {...dato} />
            } else {
                return null;
            }
        })
    } else if(rat === 4) {
        return img.map(datos => {
            if(datos.rating >= 6 && datos.rating <= 8) {
                return <MovieItems key={datos.id} {...datos} />
            } else {
                return null;
            }
        })
    } else if(rat === 5) {
        return img.map(item => {
            if(item.rating >= 8 && item.rating <= 10) {
                return <MovieItems key={item.id} {...item} />
            } else {
                return null;
            }
        })
    }
  return (
    <></>
  )
}

export default MapsItemsSearch;