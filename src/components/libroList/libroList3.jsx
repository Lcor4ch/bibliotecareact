import React from 'react'
import reactDom from 'react-dom'
import { useSelector } from 'react-redux'
import LibroListItem from './libroListItem'

const selectLibros = state => state.libros
const selectPersonas = state => state.personas
const LibroList = () => {
    
  const libros = useSelector(selectLibros)
  const personas = useSelector(selectPersonas)

  


    // since `todos` is an array, we can loop over it  
  libros.map((libro)=>{return libro.borrable=(personas.filter(persona=>libro.persona_id===persona.id).length===0)})
  const renderedListItems = libros.map(libro => {
    return <LibroListItem key={libro.id} id={libro.id} nombre={libro.nombre} borrable={libro.borrable} selected={libro.selected}/>
  })
  libros.filter((libro)=>libro.selected=true)

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default LibroList