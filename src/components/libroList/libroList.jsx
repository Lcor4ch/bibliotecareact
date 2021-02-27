import React from 'react'
import { connect } from 'react-redux'
import LibroListItem from './libroListItem'


class LibroList extends React.Component {
  render(){
        if (this.props.state.personas.length*this.props.state.libros.length*this.props.state.categorias.length>0){

        const libros = this.props.state.libros
        const personas = this.props.state.personas
        const categorias = this.props.state.categorias
        libros.filter((libro)=>libro.selected===true)

    return (
        <div className="ListaLibro">
          
          {libros.map(libro => (
            <LibroListItem/>
          ))}
          
        </div>
      )}else{return null};
}
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state
    }
}


export default connect(mapEstadoAProps)(LibroList);