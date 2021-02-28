import React from 'react'
import{connect} from 'redux'
import { useSelector} from 'react-redux'


const selectCategorias = (state) => state.categorias

const CategoriaList = () => {
  const categorias = useSelector(selectCategorias)
  const renderedListItems = categorias.map((categoria) => {
    return <option value={categoria.nombre}></option>
  })
}

class CategoriaListForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Volvo'
      };
    }
    render() {
    const listIt=this.props.state.categorias.map(categoria=>{return <option value="Ford">{categoria.nombre}</option>})
      return (
        <form>
        <select value=''>
          <listIt/>
        </select>
        </form>
      );
    }
  }

const mapEstadoAProps=(state) => {
 
    return {
        state: state,
    }
}

export default connect(mapEstadoAProps)(CategoriaListForm);