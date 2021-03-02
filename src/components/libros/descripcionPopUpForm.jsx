import React from "react";
import Popup from "reactjs-popup";
import DescripcionPutForm from "./descripcionPutForm";

class DescripcionPopUpForm extends React.Component {
  render() {
    return (
      <Popup
        trigger={<button className="button"> Editar </button>}
        modal
        nested
      >
        <DescripcionPutForm
          persona_id={this.props.persona_id}
          categoria_id={this.props.categoria_id}
          nombre={this.props.nombre}
          email={this.props.email}
          id={this.props.id}
          borrable={this.props.borrable}
        />
      </Popup>
    );
  }
}
export default DescripcionPopUpForm;
