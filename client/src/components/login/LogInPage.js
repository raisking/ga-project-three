import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper= styled.div`
background-color: #3b68af;
color: #000;
padding: 50px;
width: 80%;
`
const Container= styled.div`
background-color: #ccc;
border: 1px solid #000;
color: #000;
padding: 30px;
width: 80%;
p{
    font-weight: bold;
}

`
const ContainerA= styled.div`
background-color: #ccc;
margin-top: 5px;    
border: 1px solid #000; 
color: #000;
padding: 30px;
width: 80%;

p{
    font-weight: bold;
}
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
                        <hr/>
                    {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/month/${user._id}`}>
                        {user.userName}<br/></Link>)
                    })}
                    </Container>
        
                </div>
                <div>
                {/* <ContainerA> */}
                    {/* <p>User Expenses</p> */}
                    {/* <hr/> */}
                    {/* {this.state.users.map(user => {
                        return (<Link key={user._id} to={`/expense/${user._id}`}>
                        {user.userName}<br/></Link>)
                    })} */}
                    {/* </ContainerA> */}
                   
                </div>
                </Wrapper>
        
            </div>
             
        )
    }
}
export default LogInPage;