import React, {useState} from 'react'
import '../Forms/forms.css'
import background from './journal.jpg'
import config from '../config'


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
            console.log(parseRes)
            if (!parseRes.error) {
                alert('Success! Your Entry Has Been Posted')
            } else {
             console.error(parseRes.error) 
            } 

        }
            
        
    



    return (
        <div>
            <h2 style={{fontSize:'20', textAlign:'center', marginTop:'3%'}}>New Journal Entry</h2>
            <p style={backimg}>
            <form>
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
                </p>
        </div>
    )}
const backimg = {
    
    background: `url(${background})`,
    backgroundPosition:'left',
    backgroundSize:'contain',
    backgroundRepeat: 'no-repeat',
    marginBottom:'25px'
    
   
}



export default NewJournalEntry;