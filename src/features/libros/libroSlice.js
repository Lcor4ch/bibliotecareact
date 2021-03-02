import axios from "axios"

const url = 'http://localhost:3000';
const initialState = [{id:0,nombre:'nada',persona_id:0,categoria_id:0,descripcion:'',selected:true,borrable:false}];

  
  export default function libroReducer(state = initialState, action) {
    switch (action.type) {
      case 'libros/libroAdded': {
        // Can return just the new todos array - no extra object around it
        return [action.payload].concat(state)
      }
      case 'libros/librosLoaded': {
        // Replace the existing state entirely by returning the new value
        
        action.payload.map((act)=>{return act.borrable=false})
        return action.payload
      }
      case 'libros/librosPorGenero':{
        state.map((libro)=> {return libro.selected=(libro.categoria_id===action.payload)})
        return state
      }
      
      case 'libros/mostrarTodo':{
        return state.map((libro)=>libro.selected=true)
      }
      case 'libros/libroDeleted': {
        // Can return just the new todos array - no extra object around it
        return state.filter((libro) => libro.id !== action.payload)
      }
      case 'libros/prestarLibro':{
        
      return state.map((libro)=>{if(libro.id===action.payload.id){return libro.persona_id=action.payload.persona_id}})
      }
      case 'libros/libroDevolver':{
       return state.map((libro)=>{if(libro.id===action.payload.id){return libro.persona_id=null}}) 

      }
      default:
        return state
    }
  }
  
  export async function fetchLibros(dispatch, getState) {
    const response = await axios.get(url+'/libro')
    const stateBefore = getState()
    console.log('Libros before dispatch: ', stateBefore.libros)
    
    const caca =response.data.respuesta; 
    console.log(154554,caca)
    dispatch({ type: 'libros/librosLoaded', payload: caca })
    const stateAfter = getState();
    console.log(10, stateAfter);
    console.log('Libros after dispatch: ', stateAfter.libros.length)
  }  