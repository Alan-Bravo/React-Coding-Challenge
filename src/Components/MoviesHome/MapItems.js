import MoviesItemsHome from './MoviesItemsHome';
import useMoviesHome from '../hooks/useMoviesHome';

//LO MISMO QUE EN MOVIESVIEWSEARCH, ACA SE FILTRAN LAS PELICULAS CON LAS ESTRELLAS.

export const MapItems = ({rat}) => {

    const { data } = useMoviesHome();

    let theData = data.map(i => (
      <MoviesItemsHome key={i.id} {...i} />
    ));
  
    if(rat < 1 || rat === null) {
      return theData
    } else if(rat === 1) {
      return data.map(d => {
        if(d.rating >= 0 && d.rating <= 2) {
          return <MoviesItemsHome key={d.id} {...d} />
        } else {
            return null;
        }
      })
    } else if(rat === 2) {
      return data.map(dat => {
        if(dat.rating >= 2 && dat.rating <= 4) {
          return <MoviesItemsHome key={dat.id} {...dat} />
        } else {
            return null;
        }
      })
    } else if(rat === 3) {
        return data.map(dato => {
            if(dato.rating >= 4 && dato.rating <= 6) {
                return <MoviesItemsHome key={dato.id} {...dato} />
            } else {
                return null;
            }
        })
    } else if(rat === 4) {
        return data.map(datos => {
            if(datos.rating >= 6 && datos.rating <= 8) {
                return <MoviesItemsHome key={datos.id} {...datos} />
            } else {
                return null;
            }
        })
    } else if(rat === 5) {
        return data.map(item => {
            if(item.rating >= 8 && item.rating <= 10) {
                return <MoviesItemsHome key={item.id} {...item} />
            } else {
                return null;
            }
        })
    }

    return (
        <></>
    )
  }