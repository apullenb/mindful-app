import React, { Component } from 'react'
import RatingBox from '../Page Components/RatingBox'
import Entry from './Entry'
import {Link} from 'react-router-dom'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class AllEntryView extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  dailyLog: [],
                  text: ''
                }
              }
    componentDidMount() {
      fetch(`${config.API_ENDPOINT}/api/activity`,{ method: 'GET',
      headers: {token: localStorage.token}
    })
      .then(res => res.json(''))
      .then(entries => {
        this.setState({ dailyLog: entries         
            })
           
           if (this.state.dailyLog.length == 0 ) {
            this.setState({text : 'No Entries Yet. Please add New Entry'}) 
          }
          })
    }
   
      
 
    render() {
    const log = this.state
      return (
        <div className="dailylog-entries">
          <span style={{textAlign:'center'}}><h3>Your Daily Activity Entries</h3></span>
       
          <h3>{this.state.text}</h3>
          <RatingBox rate={this.state.dailyLog} />
          {this.state.dailyLog.map((entry) => { 
          return   <div style={cardStyle} key={entry.id}><Entry log= {entry}/></div>})}
            <Link to = {{pathname: '/lognewentry', state: log}}> <button style={{marginLeft:'20%', marginRight:'20%', marginBottom:'5%', marginTop:'8%'}}><FontAwesomeIcon icon="plus" style={{fontSize:'14px'}} /> Record New Daily Entry</button></Link>
           
      </div>
      )
  
  }
}
const cardStyle = {
  
  display: 'inline-block',
  alignContent: 'center',
  marginTop: '10px',
 marginBottom:'10px',
 marginLeft: '5px',
 marginRight: '5px',
}
  export default AllEntryView;