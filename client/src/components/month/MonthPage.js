import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MonthsList from './MonthsList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Expense from '../expense/Expense'
import ExpensePage from '../expense/ExpensePage'


const Wrapper = styled.div`
border: 1px solid #000;
background-color: #3b68af;
color: #000;
padding: 30px;
width: 100%;
margin: 0 auto;
box-shadow: 10px 10px 5px #888888;
button{
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
    margin-bottom: 10px;
  }
  button:hover {
    background-image: linear-gradient(to bottom, #155882, #3498db);
    text-decoration: none;
  }
`
const Container = styled.div`
border: 1px solid #000;
  background-color: #ccc;
  padding: 10px;
  ul li {
      list-style: none;
      padding: 5px;
  }
`

class MonthPage extends Component {
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
            months: []
        }
    }
    //get info about the usr when it initially mounts
    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        console.log(res)
        this.setState({ user: res.data })
    }
    //create a post for Month
    createNewMonth = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/months`)
        console.log(res.data)
        this.setState({ user: res.data })
    }
    //create a delete for month
    //create a onclick that delete a month
    deleteMonth = async (monthId) => {
        const { userId } = this.props.match.params
        const id = monthId
        const res = await axios.delete(`/api/users/${userId}/months/${id}`)
        this.setState({ user: res.data })
    }

    handleChange = (event, monthId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        const month = clonedUser.months.find(i => i._id === monthId)
        console.log(month)
        month[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }
    //triggger patch when leaving an input field
    updateMonth = async (monthId) => {
        const { userId } = this.props.match.params
        const id = monthId
        const clonedUser = { ...this.state.user }
        const month = clonedUser.months.find(i => i._id === monthId)
        const res = await axios.patch(`/api/users/${userId}/months/${id}`, {
            month: month
        })
        this.setState({ user: res.data })
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <Container>
                        <h2>{this.state.user.userName}'s' Information</h2>
                        <ul>
                            {/* displays the user information */}
                            <li>Name:{this.state.user.userName} </li>
                            <li>Password: {this.state.user.password} </li>
                            <li>Email: {this.state.user.email} </li>
                            <li>Street: {this.state.user.street} </li>
                            <li>City: {this.state.user.city} </li>
                            <li>State: {this.state.user.state} </li>
                            <li>Zipcode: {this.state.user.zipcode} </li>

                        </ul>


                    </Container>
                    <h1>{this.state.user.userName}'s Monthly Income</h1>

                    <Link to={`/expense/${this.state.user._id}`}>
                        <button>Expense</button></Link>

                    {/* creates new month */}
                    <button onClick={this.createNewMonth}>Add Month</button>
                    <MonthsList months={this.state.user.months}
                        handleChange={this.handleChange}
                        deleteMonth={this.deleteMonth}
                        updateMonth={this.updateMonth}
                    />
                    <Router>
                        <Switch>

                            <Route exact path="/expense/:userId" component={ExpensePage} />
                        </Switch>
                    </Router>
                </div>
            </Wrapper>
        );
    }
}

export default MonthPage;