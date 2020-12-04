import react, {useState} from 'react';
import '../Forms/forms.css'
import config from '../config'




function LogNewEntry(props) {
console.log(props.location)
    const [inputs, setInputs] = useState({
        medicine: '',
        hours_slept:'0',
        food: 'Breakfast:      Lunch:     Dinner:    Snack:',
        sugar_intake:'0',
        rate_focus:'3', 
        rate_happiness:'3', 
        rate_energy: '3'
    })
   

    const {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy} = inputs
    
    const onChange = (e) => 
        setInputs({...inputs, [e.target.name] : e.target.value })
    
       
        const onSubmit = async e => {
      e.preventDefault();
            const body = {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy}
            const token = localStorage.getItem('token')
            const response = await fetch(`${config.API_ENDPOINT}/api/activity`, {
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
          <h2>Daily Activity Log</h2>
            <h2> Rate Yourself</h2>
            <form>
            <label>
              <span>How Many Hours Did You Sleep Last Night?</span>
              </label>
            <input type="number" style= {{width: "50px"}} name="hours_slept" onChange={e=> onChange(e)} value={hours_slept} required/>
            <label>
              <span>What Medicine(s) Did You Take Today?</span>
              </label>
            <input type="text" name="medicine" onChange={e=> onChange(e)} value={medicine} required />
            <label><span>What Did You Eat Today?</span>
            <textarea name='food' onChange={e=> onChange(e)} value={food} rows='5' cols='25' placeholder= {`Breakfast:_____   Lunch:____           Dinner:_____         Snack:______
            `}/></label>
              <label>
              <span>How Many Servings of Sugar Did You Eat Today?</span>
              <span>(From 0-5)</span>
            </label>
            <input type="range" name="sugar_intake"  min="0" max="5" onChange={e=> onChange(e)} value={sugar_intake}/>
            <p className='valueDis'>({sugar_intake} servings)</p>
            <label>
              <span>Rate Your Focus Today</span>
            </label>
            <input type="range" name="rate_focus" min="0" max="5"  onChange={e=> onChange(e)} value={rate_focus}/>
            <p className='valueDis'>{rate_focus}</p>
            <label>
              <span>Rate Your Happiness Today</span>
            </label>
            <input type="range" name="rate_happiness" min="0" max="5"  onChange={e=> onChange(e)} value={rate_happiness}/>
            <p className='valueDis'>{rate_happiness}</p>
            <label>
              <span>Rate Your Energy Level Today</span>
            </label>
            <input type="range" name="rate_energy" min="0" max="5"  onChange={e=> onChange(e)} value={rate_energy}/>
            <p className='valueDis'>{rate_energy}</p>
                <p><button onClick= {onSubmit}> Submit</button></p>
               </form>
        </div>
    )}

export default LogNewEntry;