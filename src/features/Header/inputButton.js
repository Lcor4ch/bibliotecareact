import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store'
import './inputButton.css' ;


const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const cosa = store.getState()
  
  const handleChange = e => dispatch({type: 'categorias/categoriasLoaded', payload: store.getState().categorias })
  
  

  return (
    <button 
      
      autoFocus={false}
      value={'click me'}
      onClick={handleChange}
      
    >click me</button>
  )
}

export default Header