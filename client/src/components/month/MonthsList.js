import React from 'react'
import styled from 'styled-components'
import Month from './Month'

const MonthsListStyles = styled.div`
background-color: #ccc;
width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const MonthsList = (props) => {
    return(
        <MonthsListStyles>
            {props.months.map((month) => {
                return(
                    <Month key ={month._id} _id={month._id}
                    handleChange = {props.handleChange}
                    updateMonth = {props.updateMonth} 
                    deleteMonth = {props.deleteMonth}
                    title={month.title} 
                    description ={month.description} />
                )
            })}
            </MonthsListStyles>
    )
}


export default MonthsList;