import { useState, useEffect } from 'react';
import { moviesHome } from '../../helpers/moviesHome';

//EN ESTE HOOK SE TRAE LA DATA DE LAS PELICULAS PARA LA HOME.

const useMoviesHome = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
      const newData = await moviesHome();
      setData(newData);
      setIsLoading(false);
    }
  
    useEffect(() => {
      getData();
    }, [])

    return {
        data,
        isLoading
    }
}

export default useMoviesHome;