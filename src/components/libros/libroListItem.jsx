import React from "react";
import { connect } from "react-redux";
import { deleteLibro } from "../funcionesAxios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class LibroListItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.prestar = this.prestar.bind(this);
    this.clickear = this.clickear.bind(this);
  }
  prestar() {
    this.props.prestar();
  }
  delete() {
    this.props.onDelete();
  }
  clickear() {
    console.log(1234, this.props);
    this.props.onClickear();
  }

  render() {
    return (
      //<li className="itemListLibro">
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{this.props.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Persona si está prestado
            </Card.Subtitle>
            <Card.Text>
              Descripcion. Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        /*{ <Card>
          <Card.Body>{this.props.nombre}</Card.Body>
          <div>
            <button
              className="botonCategoriaItem2"
              onClick={this.clickear}
              id={this.props.id}
            >
              0
            </button>
            <button
              className="botonCategoriaItem2"
              onClick={this.delete}
              disabled={!this.props.borrable}
              id={this.props.id}
            >
              X
            </button>
          </div>
        </Card>
      </li> }*/
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
    onDelete: () => {
      const get_res = async () => {
        try {
          const res = await deleteLibro({ id: props.id });
          if (res.status === 200) {
            dispatch({ type: "libros/libroDeleted", payload: props.id });
          }
        } catch (e) {
          console.error(e);
        }
      };
      get_res();
    },
    onClickear: () => {
      dispatch({ type: "categorias/hacerBorrables" });
    },
  };
};

export default connect(mapEstadoAProps, mapAccionesAProps)(LibroListItem);
