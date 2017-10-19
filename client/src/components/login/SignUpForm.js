import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`

border: 1px solid #000;
background-color: #ccc;
color: #000;
padding: 30px;
width: 80%;
    box-shadow: 10px 10px 5px #888888;
button{
    background: #13527d;
    background-image: linear-gradient(to bottom, #13527d, #2980b9);
    -webkit-border-radius: 6;
    -moz-border-radius: 6;
    border-radius: 6px;
    font-family: Arial;
    color: #ffffff;
    font-size: 12px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    margin-top: 10px;
  }
  button:hover { 
    background-image: linear-gradient(to bottom, #155882, #3498db);
    text-decoration: none;
  }
  input{
      width: 250px;
      height: 20px;
      margin-bottom: 12px;
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

    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.newUser }
        updateUser[attribute] = event.target.value
        this.setState({ newUser: updateUser })
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
                    <h2>Create a new user account</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="userName"> User Name</label>
                        </div>
                        <div>
                            <input
                                onChange={this.handleChange} name="userName"
                                type="text" placeholder="username" value={this.state.newUser.userName}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.password}
                                name="password" placeholder="password" type="password" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.email}
                                name="email" placeholder="email" type="text" />
                        </div>
                        <div>
                            <label htmlFor="street">Street</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.street}
                                name="street" placeholder="street" type="text" />
                        </div>
                        {/* <div>
                            <label htmlFor="city">City</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.city}
                                name="city" placeholder="city" type="text" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.state}
                                name="state" placeholder="state" type="text" />
                        </div>
                        <div>
                            <label htmlFor="zipcode">Zipcode</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.zipcode}
                                name="zipcode" placeholder="zipcode" type="text" /> 
                         </div> */}
                        <button>Create New User</button>
                    </form>

                </div>
            </Wrapper>
        );
    }
}

export default SignUpForm;