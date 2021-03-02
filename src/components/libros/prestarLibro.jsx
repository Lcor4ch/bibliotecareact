import React from 'react';
import {prestarLibro} from '../funcionesAxios';
import { connect } from "react-redux";
class PrestarLibro extends React.Component {
    constructor(props){
      super(props)
        this.state={id:this.props.id, persona_id:this.props.persona_id,categoria_id:this.props.categoria_id,
                    descripcion:this.props.descripcion,nombre:this.props.nombre }
        
        this.handleSubmit = this.handleSubmit.bind(this);    
        
    }
  

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onPrestar(this.state)
    e.target.reset();
    console.log(this.props)
    this.setState({id:this.props.id,persona_id: null})
}
onChangeInt = (event) => {
  event.preventDefault();
  console.log(event.target.name,event.target.value)
  this.setState({[event.target.name] : parseInt(event.target.value)});
}
render(){
    if(this.props.state){
        const opciones=[<option key={-12} value={null}></option>];
        this.props.state.map((persona)=>opciones.push(<option key={persona.id} value={persona.id}>{persona.nombre+' '+persona.apellido}</option>))
        return (
          <form className="formLibro" onSubmit={this.handleSubmit} disabled={this.props.persona_id!=null}>
          <div className="formLibro2"><select name='persona_id' onChange={this.onChangeInt} >{opciones}</select>
           </div>
            <input
            type='submit' value='Prestar' disabled={this.props.persona_id!=null}
            />  
            </form>
        );
      }else{return null}
      }


}

const mapEstadoAProps = (state) => {
        return {
          state: state.personas,
        };
      };

const mapAccionesAProps = (dispatch, props) => {
        return {
      onPrestar:(props)=>{
        console.log(props)
        const prestar = async () => {
          try {
            const res = await prestarLibro( parseInt(props.id), props);
            if (res.status === 200) {
              const payload = props;
              payload.borrable=false
              dispatch({ type: "libros/libroDeleted", payload: res.data.id });
              dispatch({type:"libros/libroAdded",payload:payload})    

            }
          } catch (e) {
            console.error(e);
          }
        };
        prestar();
      }
    }
}
export default connect(mapEstadoAProps,mapAccionesAProps)(PrestarLibro)