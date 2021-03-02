import React from "react";
import { connect } from "react-redux";
import { deleteCategoria } from "../funcionesAxios";

class categoriaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.traerLibros = this.traerLibros.bind(this);
    this.delete = this.delete.bind(this);
  }
  traerLibros() {
    this.props.onTraerLibros();
  }
  delete() {
    this.props.onDelete();
  }

  render() {
    return (
      <li className="itemListCategoria" id={this.props.id}>
        <button className="botonCategoriaItem" onClick={this.traerLibros}>
          {this.props.nombre}
        </button>
        <button
          className="botonCategoriaItem2"
          onClick={this.delete}
          disabled={!this.props.borrable}
        >
          X
        </button>
      </li>
    );
  }
}

const mapEstadoAProps = (state) => {
  return {
    state: state,
  };
};

const mapAccionesAProps = (dispatch, props) => {
  return {
    onTraerLibros: () => {
      dispatch({ type: "libros/librosPorGenero", payload: props.id });
      dispatch({ type: "lista/setIdReq", payload: props.id });
      dispatch({ type: "lista/mostrarDeCategorias" });
    },

    onDelete: () => {
      const get_res = async () => {
        try {
          const res = await deleteCategoria({ id: props.id });
          if (res.status === 200) {
            dispatch({
              type: "categorias/categoriaDeleted",
              payload: props.id,
            });
          }
        } catch (e) {
          alert(e.response.data.Error);
        }
      };
      get_res();
    },
  };
};

export default connect(mapEstadoAProps, mapAccionesAProps)(categoriaListItem);
