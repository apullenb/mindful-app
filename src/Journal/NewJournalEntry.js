import React, {useState} from 'react'
import '../Forms/forms.css'
import background from './journal.jpg'
import config from '../config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {withRouter} from 'react-router';

function NewJournalEntry (props) {
    const [inputs, setInputs] = useState({
        mood: '',
        title: '',
        content:''
    })
console.log(props)
    const {mood, title, content} = inputs

    const onChange = (e) => 
        setInputs({...inputs, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
            const body = {mood, title, content}
            const token = localStorage.getItem('token')
            const response = await fetch(`${config.API_ENDPOINT}/api/journal`, {
                method: "POST", headers: {"content-type" : "application/json", 'token': `${token}`}, body: JSON.stringify(body)
            })
            const parseRes = await response.json()
            if (!parseRes.error) {
                toast.success('Success! Your Entry Has Been Posted')
                props.history.push('/AllJournalEntries')

            } else {
            toast.info(parseRes.error);
             console.error(parseRes.error) 
            } 

        }
        

    return (
        <div className='body'>
            <section>
                {/* <ToastContainer /> */}
            <h2>New Journal Entry</h2>
            
            <form className='journal'>
                <label> <span>Current Mood:</span>
                    <select name='mood' value= {mood} onChange={e=> onChange(e)} required>
                        <option>Choose One:</option>
                        <option>Happy</option>
                        <option>Excited</option>
                        <option>Hopeful</option>
                        <option>Frustrated</option>
                        <option>Angry</option>
                        <option>Depressed</option>
                    </select>
                </label> 
                 <label> <span>Entry Title:</span>
                    <input type="text" placeholder="I am feeling...!" name='title' value= {title} onChange={e=> onChange(e)}  />
                </label>

                <label> <span>Journal Entry Content:</span>
                    <textarea rows='100' cols='50' placeholder="This is what happened today!..." name='content' value= {content} onChange={e=> onChange(e)}  />
                </label>
                <button onClick= {onSubmit}>Submit</button>
                </form>
                <p>{' '}</p>
                </section>
        </div>
    )}
const backimg = {
    
    // background: `url(${background})`,
    // backgroundPosition:'center',
    // backgroundSize:'fill',
    // backgroundRepeat: 'no-repeat',
    // marginBottom:'25px'
    
   
}



export default NewJournalEntry;