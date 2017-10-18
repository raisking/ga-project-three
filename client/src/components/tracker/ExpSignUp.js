import React, { Component } from 'react';
import axios from 'axios'

class ExpSignUp extends Component {
    state = {
        newExpense: {
            rent: '',
            gas: '',
            grocery: ''
        }
    }
    handleChange= (event) => {
        const attribute = event.target.name
        const updateExpense = {...this.state.newExpense}
        updateExpense[attribute] = event.target.value
        this.setState({newExpense: updateExpense})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users', {
            'user': this.state.newExpense
        })
        console.log(res.data)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = "rent"> Rent</label>
                        <input onChange = {this.handleChange} 
                        name ="rent" type="text" 
                        value={this.state.newExpense.rent}/>
                    </div>
                    <div>
                        <label htmlFor = "gas"> Gas</label>
                        <input onChange = {this.handleChange} 
                        name ="gas" type="text" 
                        value={this.state.newExpense.gas}/>
                    </div>
                    <div>
                        <label htmlFor = "grocery"> Grocery</label>
                        <input onChange = {this.handleChange} 
                        name ="grocery" type="text" 
                        value={this.state.newExpense.grocery}/>
                    </div>
                    <button> Submit</button>
                </form>
                
            </div>
        );
    }
}

export default ExpSignUp;