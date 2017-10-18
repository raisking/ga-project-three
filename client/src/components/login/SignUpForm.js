import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
border: 1px solid #000;
background-color: #ccc;
color: #000;
padding: 30px;
width: 80%;
button{
    background: #13527d;
    background-image: -webkit-linear-gradient(top, #13527d, #2980b9);
    background-image: -moz-linear-gradient(top, #13527d, #2980b9);
    background-image: -ms-linear-gradient(top, #13527d, #2980b9);
    background-image: -o-linear-gradient(top, #13527d, #2980b9);
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
    background: #155882;
    background-image: -webkit-linear-gradient(top, #155882, #3498db);
    background-image: -moz-linear-gradient(top, #155882, #3498db);
    background-image: -ms-linear-gradient(top, #155882, #3498db);
    background-image: -o-linear-gradient(top, #155882, #3498db);
    background-image: linear-gradient(to bottom, #155882, #3498db);
    text-decoration: none;
  }
  input{
      width: 250px;
      height: 20px;
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

                    <h2>Sign up a new user</h2>

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="userName"> User Name</label>
                        </div>
                        <div>
                            <input
                                onChange={this.handleChange} name="userName"
                                type="text" value={this.state.newUser.userName}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.password}
                                name="password" type="text" />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.address}
                                name="address" type="text" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.email}
                                name="email" type="text" />
                        </div>
                        <button>Create New User</button>
                    </form>

                </div>
            </Wrapper>
        );
    }
}

export default SignUpForm;