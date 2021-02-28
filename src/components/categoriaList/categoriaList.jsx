import React from 'react'
import { useSelector} from 'react-redux'
import CategoriaListItem from './categoriaListItemConConnect'







const selectCategorias = (state) => state.categorias
const selectLibros = (state)=>state.libros
const CategoriaList = () => {
  const categorias = useSelector(selectCategorias)
  const libros = useSelector(selectLibros)
  /*categorias.map((categoria)=>{return categoria.borrable=(libros.filter(libro=>libro.categoria_id===categoria.id).length===0)})*/
  
  const renderedListItems = categorias.map((categoria) => {
    return <CategoriaListItem key={categoria.id} id={categoria.id} nombre={categoria.nombre} borrable={categoria.borrable}/>
  })
  
  return <ul className="todo-list">{renderedListItems}</ul>
}


export default CategoriaList