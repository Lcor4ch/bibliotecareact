import axios from "axios"

const url = 'http://localhost:3000';

const initialState = [];
  
 
  export default function personaReducer(state = initialState, action) {
    switch (action.type) {
      case 'personas/personaAdded': {
        // Can return just the new todos array - no extra object around it
        return [
          ...state,
          action.payload,
        ]
      }
      case 'personas/personasLoaded': {
        // Replace the existing state entirely by returning the new value
        action.payload.map((act)=>{return act.selected=false})
        action.payload.map((act)=>{return act.borrable=false})
        return action.payload
      }
      case 'personas/personaDeleted':{
        return state.filter((persona) => persona.id !== action.payload)
      }
      default:
        return state
    }
  }
  export async function fetchPersonas(dispatch, getState) {
    const response = await axios.get(url+'/persona')
    const stateBefore = getState()
    console.log('Personas before dispatch: ', stateBefore.personas)
    
    const caca =response.data.respuesta; 
    console.log(caca)
    dispatch({ type: 'personas/personasLoaded', payload: caca })
    const stateAfter = getState();
    console.log(10, stateAfter);
    console.log('Personas after dispatch: ', stateAfter.personas.length)
  }  