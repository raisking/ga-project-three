import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper= styled.div`
background-color: #ccc;
color: #000;
padding: 50px;
width: 80%;
`
const Container= styled.div`
border: 1px solid #000;
color: #000;
padding: 30px;
width: 80%;
`
const ContainerA= styled.div`
margin-top: 5px;    
border: 1px solid #000; 
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
                <Wrapper>
                <div>
                <h2> User Information </h2>
                    <Container>
                        <p>User details</p>
                    {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/month/${user._id}`}>
                        {user.userName}</Link>)
                    })}
                    </Container>
                
                </div>
                <div>
                <ContainerA>
                    <p>User Expenses</p>
                    {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/expense/${user._id}`}>
                        {user.userName}</Link>)
                    })}
                    </ContainerA>
                </div>
                </Wrapper>
        
            </div>
             
        )
    }
}
export default LogInPage;