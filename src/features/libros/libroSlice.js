import axios from "axios";

const url = "http://localhost:3000";
const initialState = [
  {
    id: 0,
    nombre: "nada",
    persona_id: 0,
    categoria_id: 0,
    descripcion: "",
    selected: true,
    borrable: false,
  },
];

export default function libroReducer(state = initialState, action) {
  switch (action.type) {
    case "libros/libroAdded": {
      return [action.payload].concat(state);
    }
    case "libros/librosLoaded": {
      action.payload.map((act) => {
        return (act.borrable = false);
      });
      return action.payload;
    }
    case "libros/librosPorGenero": {
      state.map((libro) => {
        return (libro.selected = libro.categoria_id === action.payload);
      });
      return state;
    }

    case "libros/mostrarTodo": {
      return state.map((libro) => (libro.selected = true));
    }
    case "libros/libroDeleted": {
      return state.filter((libro) => libro.id !== action.payload);
    }
    case "libros/prestarLibro": {
      return state.map((libro) => {
        if (libro.id === action.payload.id) {
          return (libro.persona_id = action.payload.persona_id);
        }
      });
    }
    case "libros/libroDevolver": {
      return state.map((libro) => {
        if (libro.id === action.payload.id) {
          return (libro.persona_id = null);
        }
      });
    }
    default:
      return state;
  }
}

export async function fetchLibros(dispatch, getState) {
  const response = await axios.get(url + "/libro");
  const stateBefore = getState();

  const caca = response.data.respuesta;
  dispatch({ type: "libros/librosLoaded", payload: caca });
  const stateAfter = getState();
}
