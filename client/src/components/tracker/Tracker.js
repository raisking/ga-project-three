//Show page Trackers  
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
  border: none;
  background-color: #ccc;
  width: 280px;
  margin: 5px;
}
textarea{
  width: 95%;
  height: 70%
}
button{
  background-color: yellow;
  height: 40px;
  border: 1px solid #000;
  padding:5px;
  margin: 5px;
  font-size: .8em;
  border-radius: 5px;
}

}
`

const Tracker = (props) => {

  const deleteTracker = () => {
    props.deleteTracker(props._id)
  }
  const handleChange = (event) => {
    props.handleChange(event, props._id)
  }
  const updateTracker = () => {
    props.updateTracker(props._id)
  }

  return (
    <IdeaStyles>
      <div>
        {/* This page shows the data , delete button */}
        <span>Tracker</span>
        <input onBlur={updateTracker}
          onChange={handleChange}
          name="title" value={props.title} />
       
        {/* <input onBlur={updateTracker} onChange={handleChange} name="description" value={props.description} /> */}
        <button onClick={deleteTracker}> Delete Tracker </button>
        <button>{props.title}</button>
      </div>
    </IdeaStyles>

  )
}

export default Tracker;