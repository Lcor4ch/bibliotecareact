import React from "react";
import { connect } from "react-redux";
import PersonaListItem from "../personas/personaListItem";

class PersonaList extends React.Component {
  render() {
    this.props.state.personas.map((persona) => {
      return (persona.borrable =
        this.props.state.libros.filter(
          (libro) => libro.persona_id === persona.id).length === 0);
    });
    
    const filas = []
     
    this.props.state.personas.forEach((persona) => {
      filas.push(
        <PersonaListItem
          nombre = {persona.nombre}
          apellido = {persona.apellido}
          alias = {persona.alias}
          borrable={persona.borrable}
          id={persona.id}
          key={persona.id}
          email={persona.email}/>
          
      );
    });
    return <ul>{filas}</ul>;
  }
}

const mapEstadoAProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapEstadoAProps)(PersonaList);
