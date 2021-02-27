import axios from "axios"


const url = 'http://localhost:3000';


export async function fetchLibros2(dispatch) {
    const response = await axios.get(url+'/libro')
    const libros =response.data.respuesta; 
    dispatch({ type: 'libros/librosLoaded', payload: libros })
  }  
  export async function fetchLibros(dispatch) {
    const response = await axios.get(url+'/libro')
    const libros =response.data.respuesta; 
    return libros
  }
export async function fetchCategorias2(dispatch) {
    const response = await axios.get(url+'/categoria')
    const categorias =response.data.respuesta; 
    dispatch({ type: 'categorias/categoriasLoaded', payload: categorias })
  }

  export async function fetchCategorias() {
    const response = await axios.get(url+'/categoria').then((res)=>{return res.data.respuesta})
    return response
  }
export async function fetchPersonas2(dispatch) {
    const response = await axios.get(url+'/persona')
    const personas =response.data.respuesta; 
    dispatch({ type: 'personas/personasLoaded', payload: personas })
  }  
  export async function fetchPersonas() {
    const response = await axios.get(url+'/persona')
    const personas =response.data.respuesta; 
    return personas    
  }  
export async function deleteCategoria(categoria){
  const response = await axios.delete(url+'/categoria/'+categoria.id)
    return response
        /*dispatch({ type: 'categorias/categoriaDeleted', payload: info })*/

}
export async function addCategoria(categoria){
  const response = await axios.post(url+'/categoria',categoria)
  return response 
}
export async function deleteLibro(libro){
  const response = await axios.delete(url+'/libro/'+libro.id)
    return response
        /*dispatch({ type: 'categorias/categoriaDeleted', payload: info })*/

}
