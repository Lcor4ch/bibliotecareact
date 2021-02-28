const initialState = [{mostrarPersonas:false,idReq:-1}];

  
  export default function listaReducer(state = initialState, action) {
    switch (action.type) {
      case 'lista/mostrarDePersonas': {
        // Can return just the new todos array - no extra object around it
        return {
          ...state,
        mostrarPersonas:true
        }
      }
      case 'lista/mostrarDeCategorias': {
        // Can return just the new todos array - no extra object around it
        return {
          ...state,
        mostrarPersonas:false
        }
      }
      case 'lista/setIdReq':{
          return {...state,idReq : action.payload}
      }
      case 'lista/hacerNada':{
          return state
      }
      default:
        return state
    }
  }
  
