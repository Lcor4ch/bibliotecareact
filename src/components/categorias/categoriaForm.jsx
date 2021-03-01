import React from 'react'
import {addCategoria} from '../funcionesAxios'
import { connect } from 'react-redux'
class CategoriaForm extends React.Component {
    constructor(props){
        super(props);
        this.ponerCategoria= this.ponerCategoria.bind(this);
        this.state = {nombre:'nada'}
    }
    
    ponerCategoria=(event)=>{
        event.preventDefault();
        this.props.ponerCategoria(this.state);
        event.target.reset();
        this.setState({nombre:''})
    }
    
    myChangeHandler = (event) => {
        this.setState({nombre:event.target.value});
      }
    render() {
        return (
          <form className="formCategoria" onSubmit={this.ponerCategoria}>
          
          <p></p>
          <input
            type='text'
            onChange={this.myChangeHandler}
            placeholder={this.state.nombre}
            
          />
          <input
            type='submit' 
          />
          </form>
        );
      }
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state.categorias
    }
}

const mapAccionesAProps = (dispatch,props) => {
    return {
        /*ponerCategoria: () => {const response=addCategoria(this.props)
            dispatch({type:'categorias/categoriaAdded',payload:props.id})},*/
            ponerCategoria: (nombre) => {const get_res = async()=>{
                
                try{const res=await addCategoria(nombre)
                
                if (res.status===200){
                dispatch({type:'categorias/categoriaAdded', payload:res.data})}}
                catch(e){
                    console.log(props.nombre)
                }}
                get_res()}
        
    }
}

export default connect(mapEstadoAProps, mapAccionesAProps)(CategoriaForm);