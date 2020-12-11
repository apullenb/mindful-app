import React from 'react'
import moment from 'moment';
import './journalEntry.css'

function ViewEntry(props) {
    console.log(props)
    const content = props.location.state.content
    const date = moment(props.location.state.date).format("LL")

    function displayText(){
    //   let words = content.split(' ')
    //   let lineOne= []
      
    //     for (let i=0; i < words.length; i++) {
    //         if (i < 8 ) {
    //         lineOne.push(words[i] + ' ')
           
    //     }  
    // } return <li>{lineOne}</li> 
    return content.split(' ').map((word, i) => 
       <li key={i}>{word}{' '}</li>)   
    }
    return (
        <div className='journal'>
            <h2>Journal Entry</h2>
            <div className ='journal-entry'>
             <h3>Entry Title: {props.location.state.title}</h3>
             <h4 className= 'journal-date'>Date: {date}</h4>
             <section className='list'>
                 <div className='lines'></div>
            <h4>Mood: {props.location.state.mood}</h4>
              <div className ='list'>
              <h4>Entry: </h4> <p className='text' style ={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly' }}>{displayText()} </p>
              <p className='list'> {' '}</p> <p className='text'> {' '}</p>
              </div> 
               </section>
            </div>
        </div>
    )

}

export default ViewEntry;