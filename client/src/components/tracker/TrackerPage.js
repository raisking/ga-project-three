import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TrackersList from './TrackersList'
// import SignUpForm from '../login/SignUpForm'
// import ExpSignUp from '../expense/ExpSignUp'
import Expense from '../expense/Expense'
import ExpensePage from '../expense/ExpensePage'
// import ExpenseList from '../expense/ExpenseList'

const Wrapper = styled.div`
background-color: #3b68af;
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

class TrackerPage extends Component {
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
    //create a post for Tracker
    createNewTracker = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/trackers`)
        console.log(res.data)
        this.setState({ user: res.data })
    }
    //create a delete for Tracker
    //create a onclick that delete a Tracker
    deleteTracker = async (trackerId) => {
        const { userId } = this.props.match.params
        const id = trackerId
        const res = await axios.delete(`/api/users/${userId}/trackers/${id}`)
        this.setState({ user: res.data })
    }

    handleChange = (event, trackerId) => {
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        const tracker = clonedUser.trackers.find(i => i._id === trackerId)
        console.log(tracker)
        tracker[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }
    //triggger patch when leaving an input field
    updateTracker = async (trackerId) => {
        const { userId } = this.props.match.params
        const id = trackerId
        const clonedUser = { ...this.state.user }
        const tracker = clonedUser.trackers.find(i => i._id === trackerId)
        const res = await axios.patch(`/api/users/${userId}/trackers/${id}`, {
            tracker: tracker
        })
        this.setState({ user: res.data })
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <h2>User's Information Page</h2>
                    <ul>
                        {/* displays the user information */}
                        <li>Name: {this.state.user.userName} </li>
                        <li>Password: {this.state.user.password} </li>
                        <li>Address: {this.state.user.address} </li>
                        <li>Email: {this.state.user.email} </li>
                    </ul>
                    <h1>{this.state.user.userName}'s Tracker Expenses</h1>
                    {/* creates new Tracker */}
                    <button onClick={this.createNewTracker}>Add Tracker</button>
                    <TrackersList trackers={this.state.user.trackers}
                        handleChange={this.handleChange}
                        deleteTracker={this.deleteTracker}
                        updateTracker={this.updateTracker}
                    />
        
                </div>
            </Wrapper>
        );
    }
}

export default TrackerPage;