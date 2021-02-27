import { combineReducers } from 'redux'

import categoriaReducer from './features/categorias/categoriaSlice'
import libroReducer from './features/libros/libroSlice'
import personaReducer from './features/personas/personaSlice'
const rootReducer = combineReducers({
  
  libros: libroReducer,
  categorias: categoriaReducer,
  personas: personaReducer,
})

export default rootReducer