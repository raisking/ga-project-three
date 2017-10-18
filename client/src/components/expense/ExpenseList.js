import React from 'react'
import styled from 'styled-components'
import Expense from './Expense'

const ExpenseListStyles = styled.div`
width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
background-color: red;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const ExpenseList = (props) => {
    console.log(props)
    return(
        <ExpenseListStyles>  
            {props.expenses.map((expense) => {
                return(
                    <Expense key ={expense._id} _id={expense._id}
                    handleChange = {props.handleChange}
                    updateExpense = {props.updateExpense} 
                    deleteExpense = {props.deleteExpense}
                    rent={expense.rent}
                    gas={expense.gas} 
                    grocery={expense.grocery}
                    />
                )
            })}
            </ExpenseListStyles>
    )
}

export default ExpenseList;