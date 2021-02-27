import React from 'react'
import {addCategoria} from '../funcionesAxios'
import { connect } from 'react-redux'
class CategoriaForm extends React.Component {
    constructor(props){
        super(props);
        this.ponerCategoria= this.ponerCategoria.bind(this);
        this.state = {nombre:''}
    }
    ponerCategoria(){
        this.props.ponerCategoria(this.state);
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
            placeholder="introduzca una categoria"
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
        state: state
    }
}

const mapAccionesAProps = (dispatch,props) => {
    return {
        /*ponerCategoria: () => {const response=addCategoria(this.props)
            dispatch({type:'categorias/categoriaAdded',payload:props.id})},*/
            ponerCategoria: (nombre) => {const get_res = async()=>{
                console.log(props.nombre,10)
                try{const res=await addCategoria(nombre)
                console.log(res)
                if (res.status===200){
                dispatch({type:'categorias/categoriaAdded', payload:res.data})}}
                catch(e){
                    console.log(props.nombre)
                }}
                get_res()}
        
    }
}

export default connect(mapEstadoAProps, mapAccionesAProps)(CategoriaForm);