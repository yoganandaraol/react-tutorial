import React from 'react'
import { connect } from 'react-redux'
import { getGitUsers } from '../redux'

function UserContainer(props, dispatch){
    return (
        <div>
            <h1>Users List</h1> <button onClick={() => props.getUsers()} >Get Users</button>
            {props.usersData.users.map(u=> <div key={u.age}>{u.name}</div>)}            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usersData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers:()=> dispatch(getGitUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)