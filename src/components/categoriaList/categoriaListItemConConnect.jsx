import React from 'react';
import { connect } from 'react-redux';
import {deleteCategoria} from '../funcionesAxios'




class categoriaListItem extends React.Component {
    constructor(props){
        super(props);
        this.traerLibros= this.traerLibros.bind(this);
        this.delete= this.delete.bind(this);
        
    }
    traerLibros(){
        console.log(this.props)
        this.props.onTraerLibros();
    }
    delete(){
        this.props.onDelete();
    }
    
    render() {
        return (
            <div>
                <div className='itemListCategoria'>
                    <button className="botonCategoriaItem" onClick={this.traerLibros}>{this.props.nombre}</button>
                    <button className="botonCategoriaItem2" onClick={this.delete} disabled={!this.props.borrable}>X</button>
                </div>
            </div>
        )
    }
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state,
            
    }
}

const mapAccionesAProps = (dispatch,props) => {
    return {
        onTraerLibros: () => {
            
            dispatch({type:'libros/librosPorGenero',payload:props.id})},
        onDelete: () => {
            const get_res = async()=>{
                try{const res=await deleteCategoria({id:props.id})
                console.log(res)
                if (res.status===200){
                dispatch({type:'categorias/categoriaDeleted', payload:props.id})}}
                catch(e){
                    console.error(e)
                }}
                get_res()
            
    }
}
}

export default connect(mapEstadoAProps, mapAccionesAProps)(categoriaListItem);