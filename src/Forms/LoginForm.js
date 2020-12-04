import React, {useState} from 'react'
import {toast} from 'react-toastify';
import config from '../config'



function LoginForm({setAuth}) {
  
  const [formHandleUser, setformHandleUser] = useState('')
  const [formHandlePass, setformHandlePass] = useState('')


    const handleSubmit = async e => { 
      e.preventDefault();
      try {
    const newLogin = {username: formHandleUser, password: formHandlePass} 
    const loginRequest = { method: 'POST', headers: {'content-type': 'application/json', 'Accept': 'application/json'}, body: JSON.stringify(newLogin)}
    const response = await fetch(`${config.API_ENDPOINT}/api/users/login`, loginRequest)
    
    const parseRes = await response.json()
    if (parseRes.token) {
      localStorage.setItem('token', parseRes.token)
    setAuth(true) 
  } else {
    setAuth(false)
    toast.error(parseRes.error)
  }
  } catch (err) {
    console.error(err.message)
}
    }
    return (
     <div>
       <h1>Login</h1>
        <label> Username: 
             <p><input type= "text" name="user" value= {formHandleUser} onChange={e=> setformHandleUser(e.target.value)} />
           </p> </label>
        <label> Password: 
             <p><input type= "text" name="pass" value= {formHandlePass} onChange={e=> setformHandlePass(e.target.value)} />
            </p> </label> 
        <button onClick={handleSubmit}>Login</button>
        </div>

    );
    }
  
  export default LoginForm;
  