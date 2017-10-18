import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'

const Wrapper= styled.div`
background-color: #ccc;
color: #000;
padding: 30px;
width: 80%;
`
class LogInPage extends Component {
    state = {
      users: []
    }
    componentWillMount () {
      this.getAllUsers()
    }
    getAllUsers = async () => {
      const res = await axios.get('/api/users')
      this.setState({users : res.data})
    }
    render() {
        return (
           
            <div>
                <h3>Please Select an Existing User</h3>
                <Wrapper>
                <div>
                    {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/month/${user._id}`}>
                        {user.userName}</Link>)
                    })}
                </div>
                <div>
                    {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/expense/${user._id}`}>
                        {user.userName}</Link>)
                    })}
                </div>
                <SignUpForm/>
                </Wrapper>
        
            </div>
             
        )
    }
}
export default LogInPage;