import React from "react";
import { addLibro } from "../funcionesAxios";
import { connect } from "react-redux";

class LibroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "", categoria_id: -1, descripcion: "" };
    this.clickear = this.clickear.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeInt = this.onChangeInt.bind(this);
  }

  clickear = (event) => {
    event.preventDefault();
    this.props.onClickear(this.state);
    event.target.reset();
    this.setState({ nombre: "", categoria_id: -1, descripcion: "" });
  };

  onChange = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeInt = (event) => {
    event.preventDefault();

    this.setState({ [event.target.name]: parseInt(event.target.value) });
  };
  render() {
    if (this.props.state) {
      const opciones = [<option key={-12} value={null}></option>];
      this.props.state.map((categoria) =>
        opciones.push(
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre}
          </option>
        )
      );

      return (
        <form className="formLibro" onSubmit={this.clickear}>
          <div className="formLibro2">
            <select name="categoria_id" onChange={this.onChangeInt}>
              {opciones}
            </select>
            <input
              type="text"
              name="nombre"
              onChange={this.onChange}
              placeholder={this.state.nombre}
            />
          </div>
          <input
            className="descripcion"
            type="text"
            name="descripcion"
            onChange={this.onChange}
            placeholder={this.state.descripcion}
          />
          <input type="submit" />
        </form>
      );
    } else {
      return null;
    }
  }
}
const mapEstadoAProps = (state) => {
  return {
    state: state.categorias,
  };
};

const mapAccionesAProps = (dispatch, props) => {
  return {
    onClickear: (props) => {
      const post_libro = async () => {
        try {
          const res = await addLibro(props);
          if (res.status === 200) {
            const payload = {
              id: res.data.id,
              nombre: res.data.nombre,
              categoria_id: res.data.categoria_id,
              descripcion: res.data.descripcion,
            };
            dispatch({ type: "libros/libroAdded", payload: payload });
          }
        } catch (e) {
          alert(e.response.data.Error);
        }
      };
      post_libro();
    },
  };
};

export default connect(mapEstadoAProps, mapAccionesAProps)(LibroForm);
