import React from 'react';
class PersonaForm extends React.Component {
    state = { 
        nombre: null,
        apellido: null,
        email: null,
        alias: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() { 
        return ( 
            <div className="formPersona">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="nombre" placeholder="nombre" onChange={this.handleChange} />
                    <input type="text" id="apellido" placeholder="apellido" onChange={this.handleChange} />
                    <input type="text" id="email" placeholder="email" onChange={this.handleChange} />
                    <input type="text" id="alias" placeholder="alias" onChange={this.handleChange} />
                    <button>Guardar</button>
                </form>
            </div>
         );
    }
}
 
export default PersonaForm;