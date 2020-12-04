import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function RatingBox(props) {
  const elements= props.rate
  console.log('rating box', props)
  const star= <FontAwesomeIcon icon="star" style={{color: 'yellow'}} />
  
  
    
    function bestRating() {
        let rating= 0
        let date = ''
        for (let i=0; i < elements.length; i++) {
       if( (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy) /3 > rating ) {
            rating = (elements[i].rate_happiness + elements[i].rate_focus + elements[i].rate_energy)/3 
            date = elements[i].date
       }     
    } 
    rating = Math.round(rating) 
    const dateFormat = moment(date).format("LL")
    return <div><h4>Your Best Day Was:</h4><p>{dateFormat}</p>
    <p>Mood Rating: </p>
    {Array(rating).fill(star)}
    </div>
}
    const string = bestRating()
    return (
      <div>
      <span style = {ratingBoxStyle}>
          {string} 
       </span>
      </div>
    );
    }
  

  const ratingBoxStyle = {
    color:'white',
    padding: "5px",
    textAlign: "center",
    maxWidth: "50%",
    border: '2px dashed white',
    // boxShadow: "0px 3px 3px black",
    marginLeft:'30% '  
    
  }
 

  export default RatingBox;