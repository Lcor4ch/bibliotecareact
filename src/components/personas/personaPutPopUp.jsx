import React from 'react';
import Popup from 'reactjs-popup';
import PersonaPutForm from './personaPutForm';



class PopUpForm extends React.Component{


    render(){return(
        <Popup
            trigger={<button className="button"> Editar </button>}
            modal
            nested
        >
            <PersonaPutForm email={this.props.email} id={this.props.id} borrable={this.props.borrable}/>
        </Popup>)
    }
}
export default PopUpForm