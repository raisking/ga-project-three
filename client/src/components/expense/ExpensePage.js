import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ExpenseList from './ExpenseList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Wrapper = styled.div`
background-color:#3b68af;
color: #000;
padding: 30px;
width: 100%;
box-shadow: 10px 10px 5px #888888;
`
class ExpensePage extends Component {
    state = {
        user: {
            userName: '',
            _id: '',
            password: '',
            email: '',
            street: '',
            city: '',
            state: '',
            zipcode: '',
            expenses: []
        }
    }
    //get info about the usr when it initially mounts
    async componentWillMount() {
        console.log(this.props)
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        this.setState({ user: res.data })
    }
    //create a post for Expense
    createNewExpense = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/expenses`)
        console.log(res.data)
        this.setState({ user: res.data })
    }
    //create a delete for Expense
    //create a onclick that delete a expense
    deleteExpense = async (expenseId) => {
        const { userId } = this.props.match.params
        const id = expenseId
        const res = await axios.delete(`/api/users/${userId}/expenses/${id}`)
        this.setState({ user: res.data })
    }
    
    handleChange = (event, expenseId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        const expense = clonedUser.expenses.find(i => i._id === expenseId)
        console.log(expense)
        expense[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }

    //triggger patch when leaving an input field
    updateExpense = async (expenseId) => {
        const { userId } = this.props.match.params
        const id = expenseId
        const clonedUser = { ...this.state.user }
        const expense = clonedUser.expenses.find(i => i._id === expenseId)
        const res = await axios.patch(`/api/users/${userId}/expenses/${id}`, {
            expense: expense
        })
        this.setState({ user: res.data })
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <h1>{this.state.user.userName}'s Monthly Expenses</h1>
                    <Link to={`/month/${this.state.user._id}`}>
                        <button>Income</button></Link>
                    <button onClick={this.createNewExpense}>Add Expenses</button>
                    <ExpenseList expenses={this.state.user.expenses}
                        handleChange={this.handleChange}
                        deleteExpense={this.deleteExpense}
                        updateExpense={this.updateExpense}
                    />
                </div>
            </Wrapper>
        );
    }
}

export default ExpensePage;