import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Wrapper= styled.div`
background-color: green;
color: #000;
padding: 30px;
width: 80%;
button{
    background-color: yellow;
    height: 40px;
    border: 1px solid #000;
    padding:5px;
    margin: 5px;
    font-size: .8em;
    border-radius: 5px;
  }
`

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            password: '',
            address: '',
            email: ''
        }
    }

    handleChange = (event) =>{
        const attribute = event.target.name
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })
        console.log(res.data)
    }

    render() {
        return (
            <Wrapper>
            <div>
             
                <h2>Sign up a new user</h2>
        
                <form onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor = "userName"> User Name</label>
                    </div>
                    <div>
                    <input 
                        onChange = {this.handleChange} name="userName"
                        type="text" value={this.state.newUser.userName}
                      />   
                  </div>
                <div>
                    <label htmlFor = "password">Password</label>
                </div>
                <div>
                    <input onChange = {this.handleChange}
                        value={this.state.newUser.password}
                        name="password" type ="text"/>
                </div>
                <div>
                    <label htmlFor= "address">Address</label>
                </div>
                <div>
                    <input onChange ={this.handleChange}
                        value ={this.state.newUser.address}
                        name="address" type ="text"/>
                </div>
                <div>
                    <label htmlFor ="email">Email</label>
                </div>
                <div>
                    <input onChange ={this.handleChange}
                        value={this.state.newUser.email}
                        name ="email" type ="text"/>
                </div>
                <button>Create New User</button>
                </form>
           
            </div>
            </Wrapper>
        );
    }
}

export default SignUpForm;