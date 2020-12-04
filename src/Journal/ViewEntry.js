import React from 'react'
import moment from 'moment';
import './journalEntry.css'

function ViewEntry(props) {
    console.log(props)
   
    const date = moment(props.location.state.date).format("LL")
    return (
        <div className='journal-entry'>
            <div className ='back'>
            <h2>Journal Entry</h2>
             <h3>Title: {props.location.state.title}</h3>
             <h5>Date: {date}</h5>
            <h5>Mood: {props.location.state.mood}</h5>
            <p>Entry: {props.location.state.content}</p>
            </div>
        </div>
    )

}

export default ViewEntry;