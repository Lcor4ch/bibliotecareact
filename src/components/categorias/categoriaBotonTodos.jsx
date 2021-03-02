import React from "react";
import { connect } from "react-redux";

class botonTodos extends React.Component {
  constructor(props) {
    super(props);
    this.traerTodos = this.traerTodos.bind(this);
  }
  traerTodos() {
    this.props.onTraerTodos();
  }

  render() {
    return (
      <li className="itemListCategoria" id={this.props.id} key={this.props.id}>
        <button className="botonCategoriaItem" onClick={this.traerTodos}>
          TODOS
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
    onTraerTodos: () => {
      dispatch({ type: "lista/setIdReq", payload: -1 });
      dispatch({ type: "lista/mostrarDeCategorias" });
    },
  };
};

export default connect(mapEstadoAProps, mapAccionesAProps)(botonTodos);
