import React, {Component} from 'react';
import User from './User';

class Users extends Component{

constructor(props){
    // ReferenceError: 
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(props);
    console.log('Constructor - called');
    this.state = {
        title: "Users List",
        users: [
            {id: 1, name: "Yoga", age: 38},
            {id: 2, name: "Swetha", age: 28},
            {id: 3, name: "Nanya", age: 6},
            {id: 4, name: "Reshma", age: 4},
        ]
    };
}

static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps - called');
    return null;
}

componentDidMount(){
    console.log('componentDidMount - called');
}

shouldComponentUpdate(){
    console.log('shouldComponentUpdate - called');
    return true;
}

getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate - called');
    return null;
}

componentDidUpdate(){
    console.log('componentDidUpdate - called');
}

componentWillUnmount(){
    console.log('componentWillUnmount - called');
}


makeMeYounger = () =>{

    const newState = this.state.users.map((user) => {
        const tempUser = user;
        tempUser.age -= 10;
        return tempUser;
    });

    this.setState({newState});



    // console.log('Clicked');
    // this.setState({
    //     users: [
    //         {name: "Yoga", age: 28},
    //         {name: "Swetha", age: 18},
    //         {name: "Nanya", age: -6},
    //         {name: "Reshma", age: -4},
    //     ]
    // });
    // console.log(this.state); 
};


    render() {
        console.log('render - called');
        return (
          <div>
            <button onClick={this.makeMeYounger}>Make us 10 yrs younger</button>
            <br />
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user) => {
                    return <User key={user.id} age={user.age}>{user.name}</User>;
                })
            }
            {/* <hr />
            <User age={this.state.users[0].age}>
              {this.state.users[0].name}
            </User>
            <User age={this.state.users[1].age}>
              {this.state.users[1].name}
            </User>
            <User age={this.state.users[2].age}>
              {this.state.users[2].name}
            </User>
            <User age={this.state.users[3].age}>
              {this.state.users[3].name}
            </User> */}
          </div>
        );

    }
}

export default Users;