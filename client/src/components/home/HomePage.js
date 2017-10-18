import React, { Component } from 'react';
import SignUpForm from '../login/SignUpForm'
import LogInPage from '../login/LogInPage'
// import ExpSignUp from '../expense/ExpSignUp'
class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hello From HomePage</h1>
                {<LogInPage />}
                {/* <SignUpForm /> */}
                {/* <ExpSignUp/> */}
            </div>
        );
    }
}

export default HomePage;