import axios from "axios";

const url = "http://localhost:3000";

const initialState = [
  {
    id: 0,
    nombre: "nada",
    apellido: "nada",
    email: "nadie@nada.com",
    selected: true,
    borrable: false,
  },
];

export default function personaReducer(state = initialState, action) {
  switch (action.type) {
    case "personas/personaAdded": {
      return [...state, action.payload];
    }
    case "personas/personasLoaded": {
      action.payload.map((act) => {
        return (act.selected = false);
      });
      action.payload.map((act) => {
        return (act.borrable = false);
      });
      return action.payload;
    }
    case "personas/personaDeleted": {
      return state.filter((persona) => persona.id !== action.payload);
    }
    case "personas/personaModificada": {
      const ind = state.findIndex(
        (persona) => parseInt(persona.id) === parseInt(action.payload.id)
      );

      return state.splice(ind, 1, action.payload);
    }

    default:
      return state;
  }
}
export async function fetchPersonas(dispatch, getState) {
  const response = await axios.get(url + "/persona");
  const stateBefore = getState();

  const caca = response.data.respuesta;
  dispatch({ type: "personas/personasLoaded", payload: caca });
  const stateAfter = getState();
}
