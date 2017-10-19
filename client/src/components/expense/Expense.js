//Show page months
import React from 'react'
import styled from 'styled-components'

const IdeaStyles = styled.div`
    background-color: #ccc;
    border: 1px solid #000;
    height: auto;
    width: 300px;
    margin: 20px;
    padding: 5px;
    input   { 
      display: block;
      font-size: .9em;
      background-color: #fff;
      width: 100px;
      position: relative;
      left: 80px;   
      
    }
   
    hr{
      border-top: 1px solid #000;

    }
    p{
      text-align: right;
      position: relative;
      left: -225px;
      top: 35px;
    }
  
  `
const InputArea = styled.div`
  input {
    display: block;
    font-size: 1.3em;
    font-weight: bold;
    margin: 0;
    border: none;
    background-color: #ccc;
    width: 200px;
    height: 20px;
    margin: 5px;

  }
  `

const Expense = (props) => {

  const deleteExpense = () => {
    props.deleteExpense(props._id)
  }
  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateExpense = () => {
    props.updateExpense(props._id)
  }

  return (
    <IdeaStyles>
      <div>
        <InputArea>
          <input onBlur={updateExpense}
            onChange={handleChange}
            name="date" placeholder="Add Month" value={props.date} />
          <hr />
        </InputArea>
        <p>Rent:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="rent" placeholder="rent" value={props.rent} />

        <p>Gas:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="gas" placeholder="gas" value={props.gas} />

        <p>Grocery:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="grocery" placeholder="grocery" value={props.grocery} />

        <p>Insurance:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="insurance" placeholder="insurance" value={props.insurance} />

        <p>Internet:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="internet" placeholder="internet" value={props.internet} />

        <p>Phone:</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="phone" placeholder="phone" value={props.phone} />
        <p>Total:</p>
        <input type="Number" value={parseInt(props.rent + props.gas + props.grocery + props.insurance + props.internet + props.phone)} />
        <button onClick={deleteExpense}> Delete Expenses </button>
      </div>
    </IdeaStyles>

  )
}

export default Expense;
