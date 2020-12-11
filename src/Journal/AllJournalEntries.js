import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Entry from './Entry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../config'


class AllJournalEntries extends Component {
              constructor(props) {
              super(props)
                this.state = {
                  Journal: [],
                  text: ''
                } 
              }
              
    componentDidMount() {
      
      fetch(`${config.API_ENDPOINT}/api/journal`,{ method: 'GET',
      headers: {token: localStorage.token}
    })
      .then(res => res.json())
      .then(entries => {
        this.setState({ Journal: entries         
            })
            if (this.state.Journal.length == 0 ) {
              this.setState({text : 'No Entries Yet. Please add New Entry'}) 
            }
          })
    }
   
   
    render() {
     
    return (
      <div className='all-journal'>
        
        <section className ='line'> My Journal
        
         </section>
         <h3>{this.state.text}</h3>
         
         <section  className="journal-entries">
         
          { this.state.Journal.map((entry) => { 
      return <div key= {entry.id}> <Entry journal={entry}/> </div>}
          )}
       </section>
       <section>
       <Link to = {{pathname: '/NewJournalEntry', state: this.state.journal}}> <button style={{marginLeft:'1px'}}><FontAwesomeIcon icon="plus" style={{fontSize: '13px'}} /> Add New </button></Link>
       </section>
       </div> 
    );
    }
// }
// const cardStyle = {
//   display: 'inline-block',
//   alignContent: 'center',
//   marginTop: '10px',
//  marginBottom:'5px',
//  marginLeft: '5px',
//  marginRight: '5px',
  // display:'in-line block',
  // display:'flex',
  // flexDirection:'column',
  // backgroundColor:'#01b8d8',
  // marginLeft:'18px',
  // paddingLeft:'5px',
  // paddingRight:'5px',
  // paddingTop:'0px',
}
  export default AllJournalEntries;