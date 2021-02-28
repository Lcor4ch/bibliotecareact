import axios from "axios"

const url = 'http://localhost:3000';
const initialState = [{id:0,nombre:'nada',persona_id:0,categoria_id:0,selected:true,borrable:false}];

  
  export default function libroReducer(state = initialState, action) {
    switch (action.type) {
      case 'libros/libroAdded': {
        // Can return just the new todos array - no extra object around it
        return [
          ...state,
          action.payload,
        ]
      }
      case 'libros/librosLoaded': {
        // Replace the existing state entirely by returning the new value
        action.payload.map((act)=>{return act.selected=true})
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