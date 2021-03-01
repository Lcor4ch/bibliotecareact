import React from "react";
import { connect } from "react-redux";
import LibroListItem from "./libroListItem";


class LibroList extends React.Component {
  render() {
    const filas = [];
    const personas = this.props.state.personas;
    const libros = this.props.state.libros;
    
    libros.map((libro) => {
      return (libro.borrable =
        personas.filter((persona) => libro.persona_id === persona.id).length === 0);
    });

    console.log(100, this.props.state);
    this.props.state.libros.forEach((libro) => {
      if (this.props.state.lista.idReq === -1) {
        filas.push(
          <LibroListItem
            selected={libro.selected}
            key={libro.id}
            id={libro.id}
            nombre={libro.nombre}
            borrable={libro.borrable}/>
        );
      } else {
        if (libro.categoria_id === this.props.state.lista.idReq) {
          filas.push(
            <LibroListItem
              selected={libro.selected}
              key={libro.id}
              id={libro.id}
              nombre={libro.nombre}
              borrable={libro.borrable}/>
          );
        }
      }
    });
    
    return <ul className="ListaLibro">{filas}</ul>;
  }
}

const mapEstadoAProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapEstadoAProps)(LibroList);
