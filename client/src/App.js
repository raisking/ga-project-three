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
   background-color: #fff;
   height: 700px; 

`
const Items = styled.div`
border: 1px solid #fff;
  background-color: #ccc;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin: 20px;
  width: 60px;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
`
const ItemsA = styled.div`
border: 1px solid #fff;
background-color: #ccc;
text-decoration: none;
display: inline-block;
padding: 10px;
margin: 20px;
width: 60px;
text-align: center;
border-radius: 10px;
font-weight: bold;

`
const ItemsB = styled.div`
border: 1px solid #fff;
background-color: #ccc;
text-decoration: none;
display: inline-block;
padding: 10px;
margin: 20px;
width: 60px;
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
            <Link to="/">Home</Link>
          </div>
          </Items>
          <ItemsA>
          <div>
            <Link to="/login">Login</Link>
          </div>
          </ItemsA>
          <ItemsB>
          <div>
            <Link to="/">User</Link>
          </div>
          </ItemsB>
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
