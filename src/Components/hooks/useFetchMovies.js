import { useState, useEffect } from 'react';
import { getMovies } from '../../helpers/getMovies';

//ACA SE TRAE LA INFORMACION PROVISTA POR LA API DE BUSQUEDA.

const useFetchMovies = (title) => {
    const [img, setImg] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async() => {
      const newData = await getMovies(title);
      setImg(newData);
      setIsLoading(false);
    }
  
    useEffect(() => {
      getData();
    }, [])

    return {
        img,
        isLoading
    }
}

export default useFetchMovies;