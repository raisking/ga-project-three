//Show page months
import React from 'react'
import styled from 'styled-components'

const IdeaStyles = styled.div`
    height: auto;
    width: 300px;
    margin: 20px;
    background-color: #ccc;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 5px;
    input {
      font-weight: bold;
    }
    input, textarea {
      display: block;
      font-size: 1.2rem;
      margin: 0;
      border: 1px solid red;
      background-color: #ccc;
      width: 100px;
      margin: 5px;
    }
    textarea{
      width: 95%;
      height: 70%
    }
    button{
      background-color: #ccf;
      height: 40px;
      border: 1px solid #000;
      padding:5px;
      margin: 5px;
      font-size: .8em;
      border-radius: 5px;
    }
  }
  `
const Wrapper = styled.div`
    p{
      display: inline;
     
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
        <span>List of Expenses</span>
    

          <p>Rent</p>
          <input onBlur={updateExpense}
            onChange={handleChange}
            name="rent" placeholder="rent" value={props.rent} />
     

        <p>Gas</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="gas" placeholder="gas" value={props.gas} />

        <p>Grocery</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="grocery" placeholder="grocery" value={props.grocery} />

          <p>Insurance</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="insurance" placeholder="insurance" value={props.insurance} />

          <p>Internet</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="internet" placeholder="internet" value={props.internet} />

          <p>Phone</p>
        <input onBlur={updateExpense}
          onChange={handleChange}
          name="phone" placeholder="phone" value={props.phone} />
          <p>Total</p>
          <input type ="Number" value= {props.rent + props.gas + props.grocery + props.insurance + props.internet + props.phone} />
        <button onClick={deleteExpense}> Delete Expenses </button>
        {/* {<button>{props.title}</button>} */}
      </div>
    </IdeaStyles>

  )
}

export default Expense;
