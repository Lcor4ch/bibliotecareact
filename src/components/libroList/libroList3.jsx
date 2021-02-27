import React from 'react'
import reactDom from 'react-dom'
import { useSelector } from 'react-redux'
import LibroListItem from './libroListItem'

const selectLibros = state => state.libros

const LibroList = () => {
    
  const libros = useSelector(selectLibros)
  if (libros.length>0){
  // since `todos` is an array, we can loop over it
  console.log(libros,1000)
  libros.filter((libro)=>libro.selected=true)
  console.log(libros,2000)

  const renderedListItems = libros.map(libro => {
    return <LibroListItem key={libro.id} nombre={libro.nombre} />
  })
  console.log(libros,1000)
  libros.filter((libro)=>libro.selected=true)
  console.log(libros,2000)

  return <ul className="todo-list">{renderedListItems}</ul>
}else{return null}
}
export default LibroList