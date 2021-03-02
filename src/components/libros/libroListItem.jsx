import React from "react";
import { connect } from "react-redux";
import { deleteLibro , prestarLibro, devolverLibro} from "../funcionesAxios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DescripcionPopUpFrom from "./descripcionPopUpForm"
import PrestarLibro from "./prestarLibro"
class LibroListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={tenedor:this.props.persona_id}
    this.delete = this.delete.bind(this);
    this.prestar = this.prestar.bind(this);
    this.devolver = this.devolver.bind(this);  
  }
  prestar() {
    this.props.onPrestar();
  }

  delete() {
    this.props.onDelete();
  }
  devolver=(event)=>{
    event.preventDefault();
    this.setState({
      [event.target.id]: null
  })
    
    this.props.onDevolver()   
}





  render() {
    const personas = this.props.state.personas
    const persona = personas.find((persona)=>persona.id===this.props.persona_id)
    const cartel ='En biblioteca'
    const aMostrar = persona?persona.nombre +' '+persona.apellido:cartel
    
    
    return (
      <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>{this.props.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              
              {aMostrar}
            </Card.Subtitle>
            <Card.Text>
              {this.props.descripcion}
            </Card.Text>
            <DescripcionPopUpFrom nombre={this.props.nombre}
                                  id={ this.props.id}
                                  descripcion={this.props.descripcion}
                                  categoria_id={this.props.categoria_id}
                                  borrable={this.props.borrable}
                                  persona_id={this.props.persona_id}
                                  />
                                  <PrestarLibro nombre={this.props.nombre}
                                                id={ this.props.id}
                                                descripcion={this.props.descripcion}
                                                categoria_id={this.props.categoria_id}
                                                borrable={this.props.borrable}
                                                persona_id={this.props.persona_id}/>
                                  <button id="tenedor" onClick={this.devolver} disabled={this.props.persona_id==null}>Recuperar</button>
          </Card.Body>
        </Card>
/*<Button variant="primary">Go somewhere</Button>*/
/*<li className="itemListLibro">
        {this.props.nombre}
      <div>
          <button
          className="botonCategoriaItem2"
          onClick={this.clickear}
          id={this.props.id}> 0 </button>
        <button
          className="botonCategoriaItem2"
          onClick={this.delete}
          disabled={!this.props.borrable}
          id={this.props.id}> X </button>
          </div>
      </li>*/
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
   
    onDevolver:()=>{
      
      const devolver = async () => {
        try {
          const res = await devolverLibro(props.id);
          if (res.status === 200) {
            
            const payload = props;
            payload.borrable=true;
            payload.persona_id=null;
            dispatch({ type: "libros/libroDeleted", payload: props.id });
            dispatch({type:"libros/libroAdded",payload:payload})
          }
        } catch (e) {
          console.error(e);
          console.log(e)
        }
      };
      devolver();
    },  
  }
    
  }


export default connect(mapEstadoAProps, mapAccionesAProps)(LibroListItem);
