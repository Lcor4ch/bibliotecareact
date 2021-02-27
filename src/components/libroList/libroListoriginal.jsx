import React from 'react'
import { useSelector} from 'react-redux'
import LibroListItem from './libroListItem'


const selectPersonas = (state) => state.personas
const selectLibros = (state)=>state.libros
const LibroList = () => {
  const personas = useSelector(selectPersonas)
  const libros = useSelector(selectLibros)
  libros.map((libro)=>{return libro.borrable=(personas.filter(persona=>libro.persona_id===persona.id).length===0)})
  libros.filter((libro)=>libro.selected===true)  
  const renderedListItems = libros.map((libro) => {
    return <LibroListItem key={libro.id} id={libro.id} selected={libro.selected} nombre={libro.nombre}
     categoria_id={libro.categoria_id} persona_id={libro.persona_id}borrable={libro.borrable}/>
  })
  
  return <ul className="todo-list">{renderedListItems}</ul>
}


export default LibroList