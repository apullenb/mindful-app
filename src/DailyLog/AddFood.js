import React, {useState, useEffect} from 'react'
import config from "../config";
import moment from "moment";

function Food(props) {
    let newDate = new Date();
    let dateToday = moment(newDate).format("LL");

    const food = props.food
       
        const [breakfast, setbreakfast] = useState('')
        const [lunch, setLunch] = useState('')
        const [dinner, setdinner] = useState('')
        const [snack, setSnack] = useState('')
        const [water, setWater] = useState('')
        const [show, setShow] = useState('hide')
        const [button, setButton] = useState('+ Add Food')

        const body = {breakfast, lunch, dinner, snack, water}

   
    async function getFood() {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/api/food`, {
              method: "GET",
              headers: { token: localStorage.token },
            });
            const parseRes = await response.json();
            const thisDay = parseRes.filter(
              (day) => moment(day.date).format("LL") == dateToday
            );
          
              console.log(thisDay[0])
            if (food.id === undefined) {
               
              }
          } catch (error) {
            console.error(error.message);
          }
        }
            
 

      //Handles form inputs  
    const onChangeB = e => setbreakfast(e.target.value)
    const onChangeL = e => setLunch(e.target.value)
    const onChangeD = e => setdinner(e.target.value)
    const onChangeS = e => setSnack(e.target.value)

    const close = () => {
    button === '+ Add Food' ? setButton('close') : setButton('+ Add Food')
     show === '' ?  setShow('hide') : setShow('')
    }

    //update the database entry
    const submit = async (e) => {
      let response;
      close()
    const token = localStorage.getItem("token");
    if(!food){
      console.log('creating post')
       response = await fetch(`${config.API_ENDPOINT}/api/food`, {
        method: "POST",
        headers: { "content-type": "application/json", token: `${token}` },
        body: JSON.stringify(body)
      })
    } else {
    response = await fetch(`${config.API_ENDPOINT}/api/food/${food.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json", token: `${token}` },
      body: JSON.stringify({[e.target.name]:e.target.value}),
    });
  }
    const parseRes = await response.json();
    if (parseRes.error) {
      console.error(parseRes.error);
    } else {
    console.log(parseRes)
    }
    
  };
  
    return (
        <div className="food">
            <div className='food-box'>
            <p>Breakfast: {food && (food.breakfast) }</p>
            <div className ={show}><input type='text' value={breakfast} onChange={(e)=> onChangeB(e)}/> <button name='breakfast' value ={breakfast} onClick={(e) => submit(e)}> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Lunch: {food && (food.lunch)}</p>
            <div className ={show}><input type='text' value={lunch} onChange={(e)=> onChangeL(e)} /><button name='lunch' value ={lunch} onClick={(e) => submit(e)}> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Dinner: {food && (food.dinner)}</p>
            <div className ={show}><input type='text' value={dinner} onChange={(e)=> onChangeD(e)}/><button name='dinner' value ={dinner} onClick={(e) => submit(e)}> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Snacks: {food && (food.snack)}</p>
            <div className ={show}><input type='text' value={snack} onChange={(e)=> onChangeS(e)} /><button name='snack' value ={snack} onClick={(e) => submit(e)}> +add </button></div>
            </div>
            <button style={{margin:'7px 15px'}} onClick={close}>{button} </button>
        </div>
    )
}

export default Food
