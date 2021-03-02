const initialState = [{ mostrarPersonas: false, idReq: -1 }];

export default function listaReducer(state = initialState, action) {
  switch (action.type) {
    case "lista/mostrarDePersonas": {
      return {
        ...state,
        mostrarPersonas: true,
      };
    }
    case "lista/mostrarDeCategorias": {
      return {
        ...state,
        mostrarPersonas: false,
      };
    }
    case "lista/soloEnBiblioteca": {
      return { ...state, idReq: null };
    }
    case "lista/setIdReq": {
      return { ...state, idReq: action.payload };
    }
    case "lista/hacerNada": {
      return state;
    }
    default:
      return state;
  }
}
