import React, { useState } from 'react';
import './SearchBar.css'

// BARRA DE BUSQUEDA QUE TRAE PROPS CON DATOS DE LA BUSQUEDA REALIZADA

const SearchBar = ({onNewValue}) => {

  const [term, setTerm] = useState("");

  const onChangeInput = ({target}) => {
    setTerm(target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newTermValue = term.trim();
    if(newTermValue.length <= 1) return;
    onNewValue(newTermValue);
    setTerm('');
  }

  return (
    <div className='divSearchBar'>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          placeholder='Busque su película...'
          className='inputSearch'
          onChange={onChangeInput}
        />
      </form>
    </div>
  )
}

export default SearchBar;
