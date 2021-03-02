import React from "react";
import { connect } from "react-redux";
import LibroListItem from "./libroListItem";

class LibroList extends React.Component {
  render() {
    if (this.props.state) {
      const filas = [];
      const personas = this.props.state.personas;
      const libros = this.props.state.libros;

      libros.map((libro) => {
        return (libro.borrable =
          personas.filter((persona) => libro.persona_id === persona.id)
            .length === 0);
      });

      this.props.state.libros.forEach((libro) => {
        if (this.props.state.lista.idReq === -1) {
          filas.push(
            <LibroListItem
              selected={libro.selected}
              key={libro.id}
              id={libro.id}
              nombre={libro.nombre}
              descripcion={libro.descripcion}
              borrable={libro.borrable}
              categoria_id={libro.categoria_id}
              persona_id={libro.persona_id}
            />
          );
        } else {
          if (!this.props.state.lista.mostrarPersonas) {
            if (libro.categoria_id === this.props.state.lista.idReq) {
              filas.push(
                <LibroListItem
                  selected={libro.selected}
                  key={libro.id}
                  id={libro.id}
                  nombre={libro.nombre}
                  descripcion={libro.descripcion}
                  borrable={libro.borrable}
                  categoria_id={libro.categoria_id}
                  persona_id={libro.persona_id}
                />
              );
            }
          } else {
            if (libro.persona_id === this.props.state.lista.idReq) {
              filas.push(
                <LibroListItem
                  selected={libro.selected}
                  key={libro.id}
                  id={libro.id}
                  nombre={libro.nombre}
                  descripcion={libro.descripcion}
                  borrable={libro.borrable}
                  categoria_id={libro.categoria_id}
                  persona_id={libro.persona_id}
                />
              );
            }
          }
        }
      });

      return <ul className="ListaLibro">{filas}</ul>;
    } else {
      return null;
    }
  }
}

const mapEstadoAProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapEstadoAProps)(LibroList);
