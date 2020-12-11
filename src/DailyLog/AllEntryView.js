import React, { Component } from 'react'
import RatingBox from '../Page Components/RatingBox'
import Entry from './Entry'
import {Link} from 'react-router-dom'
import config from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Pages/Pages.css'


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
        <div className="all">
          <section>
          </section>
          <section className='headline'>
            <div style={{paddingRight:'30px'}}><h3>Your Best Day Was:</h3><RatingBox rate={this.state.dailyLog} /></div>
          {/* <div><Link to = {{pathname: '/lognewentry', state: log}}> <button><FontAwesomeIcon icon="plus" style={{fontSize:'14px'}} /> Record New Daily Entry</button></Link> </div> */}
          
          <h3>{this.state.text}</h3>
          {/* </section>            
            <section className=''> */}
              <div className='headline' >
          {this.state.dailyLog.map((entry) => { 
          return  <div style={cardStyle} key={entry.id}><Entry log= {entry}/></div>})}
           
           </div>
            </section>
      </div>
      )
  
  }
}
// const rotate = Math.random() * 1.5

const cardStyle = {
  
  display: 'inline-block',
  alignContent: 'center',
  marginTop: '10px',
 marginBottom:'10px',
 marginLeft: '15px',
 marginRight: '15px',
//  transform: `rotate(${rotate}deg)`

}
  export default AllEntryView;