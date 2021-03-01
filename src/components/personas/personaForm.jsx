import React from 'react';
import {addPersona} from '../funcionesAxios';
import { connect } from "react-redux";
class PersonaForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);    
        this.handleChange = this.handleChange.bind(this);
        
    this.state = { 
        nombre: null,
        apellido: null,
        email: null,
        alias: null
    }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props,15);
        this.props.onClickear(this.state)
        e.target.reset();
        this.setState({nombre:'',apellido:'',alias:'',email:''})
    }

    render() { 
        return ( 
            <div className="formPersona">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="nombre" placeholder="nombre" onChange={this.handleChange} />
                    <input type="text" id="apellido" placeholder="apellido" onChange={this.handleChange} />
                    <input type="text" id="email" placeholder="email" onChange={this.handleChange} />
                    <input type="text" id="alias" placeholder="alias" onChange={this.handleChange} />
                    <p></p>
                    <button>Guardar</button>
                </form>
            </div>
         );
    }
}
const mapEstadoAProps = (state) => {
    return {
      state: state.personas,
    };
  };
  
  const mapAccionesAProps = (dispatch, props) => {
    return {
      /*ponerCategoria: () => {const response=addCategoria(this.props)
              dispatch({type:'categorias/categoriaAdded',payload:props.id})},*/
      onClickear: (props) => {
        const post_persona = async()=>{
          try {
            const res = await addPersona(props);
            if (res.status === 200){
              const payload = {id:res.data.id,nombre:res.data.nombre, apellido:res.data.apellido,alias:res.data.alias,email:res.data.email,borrable:true}
              dispatch({ type: "personas/personaAdded", payload: payload });
              }
              }catch (e){
                console.log(e,10)
                
  
            }
        }
      post_persona()
      
      
      }
    };
  };
  
  
  export default connect(mapEstadoAProps,mapAccionesAProps)(PersonaForm); 
