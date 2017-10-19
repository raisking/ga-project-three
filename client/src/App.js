import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ExpensePage from './components/expense/ExpensePage'
import LogInPage from './components/login/LogInPage'
import MonthPage from './components/month/MonthPage'
import styled from 'styled-components'

const Wrapper= styled.div`
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
   background-color: #0099cc;
   height: 80px;  
   margin-bottom: 10  0px;
a{
  text-decoration: none;
  font-size: 1.1em;
}
a:hover{
  font-weight: bolder;
  color: red;
}
  
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
  }
  button:hover {
    background-image: linear-gradient(to bottom, #155882, #3498db);
    text-decoration: none;
  }
`
const Items = styled.div`

  text-decoration: none;
  display: inline-block;

  text-align: center;
  border-radius: 10px;
  font-weight: bold;
`
const ItemsA = styled.div`

text-decoration: none;
display: inline-block;
padding: 10px;
margin: 20px;
text-align: center;
border-radius: 10px;
font-weight: bold;

`


class App extends Component {
  render() {
    return (
      <Wrapper>
      <Router>
        <div>
          <Items>
          <div>
            <Link to="/">Sign Up</Link>
          </div>
          </Items>
          <ItemsA>
          <div>
            <Link to="/login">User Account</Link>
          </div>
          </ItemsA>
       
          <Switch>
            {<Route exact path="/" component={HomePage} />}

            {/* <Route exact path="/" component={ExpenseHome} /> */}
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path ="/month/:userId" component={MonthPage} />
            <Route exact path="/expense/:userId" component={ExpensePage}/>
          </Switch>
        </div>
      </Router>
      </Wrapper>
    );
  }
}
export default App;
