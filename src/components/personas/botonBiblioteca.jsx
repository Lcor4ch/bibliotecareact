import React from "react";
import { connect } from "react-redux";

class botonBiblioteca extends React.Component {
  constructor(props) {
    super(props);
    this.traerBiblioteca = this.traerBiblioteca.bind(this);
  }
  traerBiblioteca() {
    console.log(this.props);
    this.props.onTraerBiblioteca();
  }

  render() {
    return (
      <li className="itemListCategoria" id={this.props.id} key={this.props.id}>
        <button className="botonCategoriaItem" onClick={this.traerBiblioteca}>
          En Biblioteca
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

const mapAccionesAProps = (dispatch) => {
  return {
    onTraerBiblioteca: () => {
     
      dispatch({ type: "lista/soloEnBiblioteca"});
      dispatch({ type: "lista/mostrarDePersonas" });
    },
  };
};

export default connect(mapEstadoAProps, mapAccionesAProps)(botonBiblioteca);
