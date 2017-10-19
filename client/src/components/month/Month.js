//Show page months  
import React from 'react'
import styled from 'styled-components'

const IdeaStyles = styled.div`
  height: auto;
  width: 300px;
  margin: 20px;
  background-color: #ccc;
  border: 1px solid #000;

  input {
    display: block;
    font-size: .9em;
    margin-top: -15px;
    border: none;
    background-color: #fff;
    width: 100px;
    height: 20px;
    position: relative;
    left: 90px;


  }
  textarea{
    display: block;
    font-size: 1em;
    margin: 0;
    border: none;
    background-color: #ccc;
    width: 200px;
    font-weight: bold;
   
  }
  hr{
    border-top: 1px solid #000;

  }
  p{
    text-align: right;
   position: relative;
   top: 20px;
   left: -215px;
  }
`
const InputArea = styled.div`
input {
  display: block;
  font-size: 1.3em;
  font-weight: bold;
  border: none;
  background-color: #ccc;
  width: 200px;
  height: 20px;
  margin: 5px;

}
`

const Month = (props) => {

  const deleteMonth = () => {
    props.deleteMonth(props._id)
  }
  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateMonth = () => {
    props.updateMonth(props._id)
  }

  return (
    <IdeaStyles>
      <div>
        {/* This page shows the data , delete button */}
        <InputArea>
          <input onBlur={updateMonth}
            onChange={handleChange} name="date" placeholder="Add Month " value={props.date} />
          <hr />
        </InputArea>
        <p>Salary:</p>
        <input onBlur={updateMonth}
          onChange={handleChange} name="salary" value={props.salary} />
        <p>Rental:</p>
        <input onBlur={updateMonth}
          onChange={handleChange} name="rental" value={props.rental} />
        <p>Investment:</p>
        <input onBlur={updateMonth}
          onChange={handleChange} name="investment" value={props.investment} />

        <p>Total:</p>
        <input type="Number" value={parseInt(props.salary + props.rental + props.investment)} />
        <button onClick={deleteMonth}> Delete Month </button>

      </div>
    </IdeaStyles>

  )
}

export default Month;
