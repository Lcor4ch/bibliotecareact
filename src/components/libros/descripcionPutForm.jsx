import React from 'react';
import {putLibro} from '../funcionesAxios';
import { connect } from "react-redux";
class DescripcionPutForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);    
        this.handleChange = this.handleChange.bind(this);
        
    this.state = { 
        nombre: this.props.nombre,
        id: this.props.id,
        descripcion: this.props.descripcion,
        persona_id:this.props.persona_id,
        categoria_id:this.props.categoria_id,
        borrable:this.props.borrable
    }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onClickear(this.state)
        e.target.reset();
        this.setState({ 
            
            descripcion: '',
        })
    }

    render() { 
        return ( 
            <div className="formPersona">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="descripcion" placeholder="Inserte una descripcion del libro" onChange={this.handleChange} />
                    
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
        const put_libro = async()=>{
            console.log(1000,props)
          try {
            const res = await putLibro(props);
            
            if (res.status === 200){
                console.log(res,2000)
              const payload = {
                 id:parseInt(res.data.id),
                 nombre:res.data.nombre,
                 descripcion:res.data.descripcion,
                 categoria_id:res.data.categoria_id,
                 borrable:props.borrable,
                 persona_id:props.persona_id
                 
                }
              dispatch({ type: "libros/libroDeleted", payload: payload.id });
              dispatch({ type: "libros/libroAdded", payload: payload});
              }
              }catch (e){
                console.log(props)
  
            }
        }
      put_libro()
      
      
      }
    };
  };
  
  
  export default connect(mapEstadoAProps,mapAccionesAProps)(DescripcionPutForm);