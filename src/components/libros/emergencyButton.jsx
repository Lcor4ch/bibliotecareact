import React from 'react';
import { connect } from 'react-redux';

class EmBot extends React.Component{
    constructor(props){
        super(props)
        this.handleOnClick=this.handleOnClick.bind(this)
    }
    handleOnClick(){
        console.log(this.props)
    }
    
    render(){
        return <button onClick={this.handleOnClick}>click</button>
    }
}

const mapEstadoAProps = (state) => {
 
    return {
        state: state
    }
}
export default connect(mapEstadoAProps)(EmBot)

