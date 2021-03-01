import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import CategoriaList from "./components/categorias/categoriaList";
import CategoriaForm from "./components/categorias/categoriaForm";
import LibroList from "./components/libros/libroList";
import LibroForm from "./components/libros/libroForm";
import PersonaForm from "./components/personas/personaForm";
import PersonaList from "./components/personas/personaList";
import { store } from "./store";

import { fetchCategorias2, fetchPersonas2, fetchLibros2 } from "./components/funcionesAxios";

store.dispatch(fetchCategorias2);
store.dispatch(fetchLibros2);
store.dispatch(fetchPersonas2);

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Biblioteca</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="bibliotecaApp">
            <div className="categoriaColumna">
              <CategoriaForm />
              <CategoriaList />
            </div>
            <div className="categoriaColumna">
              <div>
                <LibroList />
              </div>
              <div>
                <LibroForm />
              </div>
            </div>
            <div>
              <PersonaForm />
            </div>
            <div>
              <PersonaList />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
