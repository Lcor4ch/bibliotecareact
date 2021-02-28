import React from 'react'
import {addCategoria} from '../funcionesAxios'
import { connect } from 'react-redux'





class NombreFormParaLibro extends React.Component{
    render() {
        return (
          <form className="formLibro" onSubmit={this.ponerCategoria}>
          
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


class CategoriaFormParaLibro extends React.Component {
    constructor(props){
        super(props);
        
        this.clickear = this.clickear.bind(this);    
    }   

    clickear(){
        console.log(this.props.state)
        this.props.onClickear()
    } 
    render() {
        if(this.props.state){
        const opciones=[];
        this.props.state.map((categoria=>opciones.push(<option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>)))


        return (
          <form className="formLibro" onSubmit={this.ponerCategoria}>
          <div className="formLibro2"><select>{opciones}</select> <input
            type='text'
            onChange={this.myChangeHandler}
            placeholder="introduzca el titulo"
          /></div>
            <input
            className="descripcion"
            type='text'
            id='descripcion'
            onChange={this.myChangeHandler}
            placeholder="introduzca una descripcion"
          />
           <input
            type='submit' 
          />  
          </form>
        );
      }else{return null}
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
            onClickear:(props)=>{const nom = console.log(props)
            nom()},
            ponerCategoria: (nombre) => {const get_res = async()=>{
                
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


class FormParaLibro extends React.Component{
    render(){
        return <div>
                <CategoriaFormParaLibro/>
                
                </div>
    }
}

export default connect(mapEstadoAProps, mapAccionesAProps)(CategoriaFormParaLibro);
