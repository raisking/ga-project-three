import React from 'react'
import styled from 'styled-components'
import Tracker from './Tracker'

const TrackersListStyles = styled.div`
background-color: #000;
width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
`
// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.
const TrackersList = (props) => {
    return(
        <TrackersListStyles>
            {props.trackers.map((tracker) => {
                return(
                    <Tracker key ={tracker._id} _id={tracker._id}
                    handleChange = {props.handleChange}
                    updatetracker = {props.updateTracker} 
                    deleteTracker = {props.deleteTracker}
                    title={tracker.title} 
                    description ={tracker.description} />
                )
            })}
            </TrackersListStyles>
    )
}


export default TrackersList;