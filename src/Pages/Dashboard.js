import React, {Fragment, useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import AllEntryView from '../DailyLog/AllEntryView';
import AllJournalEntries from '../Journal/AllJournalEntries';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import RatingBox from '../Page Components/RatingBox';
import Entry from '../DailyLog/Entry'
import './Dashboard.css'
import config from '../config'

const Dashboard = (props) => {
   console.log(props)
    const [name, setName] = useState('')    
 
async function getName() {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/dashboard`, {
                method: 'GET',
                headers: {token: localStorage.token}
            })
            const parseRes = await response.json()
           setName(parseRes.username)
        } catch (error) {
            console.error(error.message)
        }
    }
   
    const logout = e => {
        e.preventDefault()
        localStorage.removeItem('token');
        props.setAuth(false)
    }
    useEffect(() => {
        getName();
    },[]);
    
    
    return(
        <div className='all'>            
            <Row className='headline row' flexGrow={1} >
                     <Col span= {4}><h2>Dashboard </h2></Col> 
                     <Col span= {5}><h2>Hello {name}!</h2></Col>
                     <Col span= {2}> <button onClick= {e => logout(e)}>Logout</button></Col>
                     <Col span= {1}></Col>
                </Row>
                <Row className= "row" gutter={0}>
                    <Col className='col1' span= {6}><AllEntryView /></Col>
                    <Col span= {1}></Col>
                    <Col className='col'span= {5}>
                        <h3 style={{textAlign:'center', borderBottom:'2px dashed white', paddingBottom:'5px'}}>Your Journal</h3>
                        <AllJournalEntries /></Col>
                </Row>
        </div>
    )
}

export default Dashboard;