import React, { Component } from 'react';
import SignUpForm from '../login/SignUpForm'
import LogInPage from '../login/LogInPage'


class HomePage extends Component {
    render() {
        return (
            <div>
                {<SignUpForm />}
            </div>
        );
    }
}

export default HomePage;