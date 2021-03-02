import React from "react";
import { connect } from "react-redux";
import { deletePersona } from "../funcionesAxios";
import PersonaPutPopUp from "./personaPutPopUp";
import PopUpForm from "./personaPutPopUp";
class personaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.traerLibros = this.traerLibros.bind(this);
    this.delete = this.delete.bind(this);
    this.modificarPersona = this.modificarPersona.bind(this);
  }
  traerLibros() {
    this.props.onTraerLibros();
  }
  delete() {
    this.props.onDelete();
  }
  modificarPersona() {
    this.props.onModificar();
  }

  render() {
    if (this.props.nombre) {
      return (
        <li className="itemListCategoria" id={this.props.id}>
          <button
            className="botonCategoriaItem2"
            onClick={this.delete}
            disabled={!this.props.borrable}
          >
            X
          </button>
          <button className="botonCategoriaItem" onClick={this.traerLibros}>
            {this.props.nombre +
              " " +
              this.props.apellido +
              " (" +
              this.props.alias +
              ")"}
          </button>
          <PopUpForm email={this.props.email} id={this.props.id} />
        </li>
      );
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

const mapAccionesAProps = (dispatch, props) => {
  return {
    onTraerLibros: () => {
      dispatch({ type: "libros/librosPorPersona", payload: props.id });
      dispatch({ type: "lista/setIdReq", payload: props.id });
      dispatch({ type: "lista/mostrarDePersonas" });
    },

    onDelete: () => {
      const get_res = async () => {
        try {
          const res = await deletePersona({ id: props.id });
          if (res.status === 200) {
            dispatch({
              type: "personas/personaDeleted",
              payload: props.id,
            });
          }
        } catch (e) {
          alert(e.response.data.Error);
        }
      };
      get_res();
    },
    onModificar: () => {
      const get_res = async () => {
        try {
          const res = await deletePersona({ id: props.id });
          if (res.status === 200) {
            dispatch({
              type: "personas/personaDeleted",
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
export default connect(mapEstadoAProps, mapAccionesAProps)(personaListItem);
