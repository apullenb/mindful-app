import React from 'react';
import {Link} from 'react-router-dom';
import ViewEntry from './ViewEntry'
import background from './journal-back.png'
import moment from 'moment'
import './journalEntry.css'

function Entry(props) {
    const dateFormat = moment(props.journal.date).format("LL")
    return (
        <div> 
       
            <div className ='entry'>
            <h4 className='entry-title'>Title: {props.journal.title} </h4>
                <h5 className='entry-date'> Date: {dateFormat}</h5>
            <p className='mood'>Mood: {props.journal.mood}</p>
            <p><Link to = {{pathname: `/journal/${props.journal.id}`, state: props.journal}}> <button> View Entry</button> </Link></p>
        </div>
        </div>
    )

}
// const container={
    
//     backgroundColor:'#01b8d',
//     display: 'flex',
//     flexDirection: 'column',
//     flexWrap:'row wrap',
//      justifyContent: 'space-between',
//      alignItems: 'center',
//     // background: `url(${background})`,
//     width:'45%',
//     boxShadow: "0px 2px 4px gray",  
//     border: "1px solid #314458",
//     padding:'25px',}
export default Entry;