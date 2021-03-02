import axios from "axios";

const url = "http://localhost:3000";

const initialState = [
  { id: 0, nombre: "nada", selected: true, borrable: false },
];

export default function categoriaReducer(state = initialState, action) {
  switch (action.type) {
    case "categorias/categoriaAdded": {
      return [
        ...state,
        {
          id: action.payload.id,
          nombre: action.payload.nombre,
          selected: false,
          borrable: false,
        },
      ];
    }
    case "categorias/categoriasLoaded": {
      action.payload.map((act) => {
        return (act.selected = false);
      });
      action.payload.map((act) => {
        return (act.borrable = false);
      });
      return action.payload;
    }
    case "categorias/categoriaDeleted": {
      return state.filter((categoria) => categoria.id !== action.payload);
    }
    case "categoria/categoriaHacerBorrable": {
      return state.map((categoria) => {
        return (categoria.borrable = categoria.id === action.payload);
      });
    }
    case "categoria/HacerBorrables": {
      return state.map((categoria) => {
        return (categoria.borrable = true);
      });
    }
    default:
      return state;
  }
}

export async function fetchCategorias(dispatch) {
  const response = await axios.get(url + "/categoria");
  const categorias = response.data.respuesta;
  dispatch({ type: "categorias/categoriasLoaded", payload: categorias });
}
