import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

import { fetchCategorias , fetchPersonas , fetchLibros } from './components/funcionesAxios'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


let libros = fetchLibros();
var categorias = fetchCategorias();
var personas=[];
var x=[];
console.log(17,categorias)
async function run(x) {
    const data = await fetchPersonas();
    console.log(15,data)
    x = data[1] 
    return x; // will print your data
  }

personas=run()

  console.log(1,personas)


const estadoInicial = async () => {
    try {
      const personas = await fetchPersonas();
      const categorias = await fetchCategorias();
      const libros = await fetchLibros();
      return [personas,categorias,libros]

    }
    catch (e) {
      console.log('We have the error', e);
    }
  }
/*
const q= estadoInicial()
console.log(10, q)
libros.map((libro)=>{libro.selected=true
                     libro.borrable=(personas.filter(persona=>persona.id===libro.persona_id).length===0)
                    return libro})
categorias.map((categoria)=>{categoria.selected=true
                             categoria.borrable=(libros.filter(libro=>libro.categoria_id===categoria.id).length===0)
                            return categoria})                     

personas.map((persona)=>{persona.selected=true
                         persona.borrable=(libros.filter(libro=>libro.persona_id===persona.id).length===0)
                        return persona})
                        
var initialState= {personas:personas,categorias:categorias,libros:libros} */                       
// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)
export default store