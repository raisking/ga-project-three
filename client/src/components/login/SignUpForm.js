import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import './SignUpForm.css'

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            password: '',
            address: '',
            email: '',
            redirectToUserProfile: false
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
        this.setState({redirectToUserProfile: true})
    }

    render() {
        if(this.state.redirectToUserProfile){
            return<Redirect to={'/login'}/>
        }
        return (
       
                <div className="mainContainer">
                    <h2>Create a new user account</h2>
                    <form onSubmit={this.handleSubmit}>
                    <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="userName"> User Name</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} name="userName"
                                type="text" value={this.state.newUser.userName}
                            />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} value={this.state.newUser.password}
                                name="password" type="password" />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} value={this.state.newUser.email}
                                name="email" type="text" />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="street">Street</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} value={this.state.newUser.street}
                                name="street" type="text" />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="city">City</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} value={this.state.newUser.city}
                                name="city" type="text" />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="state">State</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange} value={this.state.newUser.state}
                                name="state" type="text" />
                        </div>
                        </div>
                        <div className ="flexboxDiv">
                        <div className="labelItem">
                            <label htmlFor="zipcode">Zipcode</label>
                        </div>
                        <div>
                            <input onChange={this.handleChange}
                                value={this.state.newUser.zipcode}
                                name="zipcode" type="text" />
                        </div>
                        </div>
                        <button>Create New User</button>
                    </form>
                </div>
        );
    }
}

export default SignUpForm;