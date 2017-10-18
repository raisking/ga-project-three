import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class ExpenseLog extends Component {
    state = {
        expenses: []
    }
    componentWillMount() {
        this.getAllUsers()
    }
    getAllUsers = async () => {
        const res = await axios.get('/api/expenses')
        this.setState({expenses: res.data})
    }
    render() {
        return (
            <div>
                <h3>Expenses List</h3>
                <div>
                    {this.state.expenses.map(expense =>{
                        return(<Link key = {expense._id} to={`/month/${expense._id}`}>
                        {expense.rent} </Link>)
                    })}
                </div>
            </div>
        );
    }
}

export default ExpenseLog;