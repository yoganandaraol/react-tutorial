import React, { Component } from 'react';

class Events extends Component {
    constructor(props){
        super(props);
        this.state = { name: 'Yoga'}
    }

    changeName = (newName) => {
        this.setState({
            
                name: newName
            
        })
    };

    changeNameFromInput = (event) => {
        this.setState({
            
                name: event.target.value
            
        })
    };

    render(){
        return (
            <div className="App">
                <br />
                <button onClick={() => this.changeName('Yogananda :( ')}>Change state using anonymous function</button> &nbsp;
                <button onClick={this.changeName.bind(this, 'Yogananda Rao Locherla :)')}>Change state using bind function</button> &nbsp;  
                <br />
                <br />
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
                <br />
                <br />
                <div>{this.state.name}</div>

            </div>
        );
    }
}

export default Events;