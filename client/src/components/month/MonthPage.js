import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MonthsList from './MonthsList'
// import SignUpForm from '../login/SignUpForm'
// import ExpSignUp from '../expense/ExpSignUp'
import Expense from '../expense/Expense'
import ExpensePage from '../expense/ExpensePage'
// import ExpenseList from '../expense/ExpenseList'

const Wrapper = styled.div`
background-color: #3b68af;
color: #000;
padding: 30px;
width: 60%;
margin: 0 auto;
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
`
const Container = styled.div`
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
            password: '',
            address: '',
            email: '',
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
                    <h2>User Information</h2>
                    <ul>    
                        {/* displays the user information */}
                        <li>Name: {this.state.user.userName} </li>
                        <li>Password: {this.state.user.password} </li>
                        <li>Address: {this.state.user.address} </li>
                        <li>Email: {this.state.user.email} </li>
                    </ul>
                    </Container>
                    <h1>{this.state.user.userName}'s Month Expenses</h1>
                    {/* creates new month */}
                    <button onClick={this.createNewMonth}>Add Month</button>
                    <MonthsList months={this.state.user.months}
                        handleChange={this.handleChange}
                        deleteMonth={this.deleteMonth}
                        updateMonth={this.updateMonth}
                    />
         
                </div>
            </Wrapper>
        );
    }
}

export default MonthPage;