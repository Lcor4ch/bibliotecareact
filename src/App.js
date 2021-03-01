
import './App.css';

import CategoriaList from './components/categorias/categoriaList'
import CategoriaForm from './components/categorias/categoriaForm'
import LibroList from './components/libros/libroList'

import LibroForm from './components/libros/libroForm'
import {store} from './store'

import { fetchCategorias2 , fetchPersonas2 , fetchLibros2 } from './components/funcionesAxios'

store.dispatch(fetchCategorias2)
store.dispatch(fetchLibros2)
store.dispatch(fetchPersonas2)

/*
const url = 'http://localhost:3000';

async function getLibros(){ 
  const dat = await axios.get(url+'/libro')
  var cc = [];
  axios.get(url+'/libro')
  .then(res=>{
    console.log(res.data);
    cc.push(res.data);  
  })
  .catch(error=>console.log('error'))  
  
  return cc
}
const dat = getLibros();
console.log(dat)


function crearLista(data){
  var libros =[];
  for(let i=0;i<data.length;i++){
    libros.push(data[i].nombre)
  }
  return libros
}

*/


function App() {
  
  return ( <div className="App">
  <nav>
    <section>
      <h1>Biblioteca</h1>
    </section>
  </nav>
  <main>
    <section className="medium-container">
      <h2>Todos</h2>
      <div className="bibliotecaApp">
      <div className="categoriaColumna"><CategoriaForm/><CategoriaList />
      
      </div>
      <div className="LibroColumna">
      <div><LibroList/></div>
      <div><LibroForm/></div>  
      </div>
      </div>
    </section>
  </main>
</div>
)
}
export default App;
