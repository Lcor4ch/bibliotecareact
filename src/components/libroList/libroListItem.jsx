import React from 'react';
import { connect } from 'react-redux';
import {deleteLibro} from '../funcionesAxios'




class LibroListItem extends React.Component {
    constructor(props){
        super(props);
        this.delete= this.delete.bind(this);
        this.prestar=this.prestar.bind(this)
    
    }
    prestar(){
        this.props.prestar();
    }
    delete(){
        this.props.onDelete();
    }
    
    render() {
        return (
            <div>
                <div className='itemListLibro'>
                     {this.props.nombre}           
                    <button className="botonCategoriaItem2" onClick={this.delete} disabled={!this.props.borrable} id={this.props.id}>X</button>
                </div>
            </div>
        )
    }
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state
    }
}

const mapAccionesAProps = (dispatch,props) => {
    return {
        onDelete: () => {
            const get_res = async()=>{
                try{const res=await deleteLibro({id:props.id})
                console.log(res)
                if (res.status===200){
                dispatch({type:'libros/libroDeleted', payload:props.id})}}
                catch(e){
                    console.error(e)
                }}
                get_res()
            
    }
}
}

export default connect(mapEstadoAProps, mapAccionesAProps)(LibroListItem);