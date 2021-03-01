import React, {useState} from 'react'

function Food() {

        const [brkf, setBrkf] = useState('')
        const [lunch, setLunch] = useState('')
        const [din, setDin] = useState('')
        const [snack, setSnack] = useState('')
        const [show, setShow] = useState('hide')
        const [button, setButton] = useState('+ Add Food')

      //Handles form inputs  
    const onChangeB = e => setBrkf(e.target.value)
    const onChangeL = e => setLunch(e.target.value)
    const onChangeD = e => setDin(e.target.value)
    const onChangeS = e => setSnack(e.target.value)

    const close = () => {
    button === '+ Add Food' ? setButton('close') : setButton('+ Add Food')
     show === '' ?  setShow('hide') : setShow('')

    }
    return (
        <div className="food">
            <div className='food-box'>
            <p>Breakfast </p>
            <div className ={show}><input type='text' value={brkf} onChange={(e)=> onChangeB(e)}/> <button > +add </button></div>
            </div>
            <div className='food-box'>
            <p>Lunch </p>
            <div className ={show}><input type='text' value={lunch} onChange={(e)=> onChangeL(e)} /><button> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Dinner </p>
            <div className ={show}><input type='text' value={din} onChange={(e)=> onChangeD(e)}/><button> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Snacks </p>
            <div className ={show}><input type='text' value={snack} onChange={(e)=> onChangeS(e)} /><button> +add </button></div>
            </div>
            <button style={{margin:'7px 15px'}} onClick={close}>{button} </button>
        </div>
    )
}

export default Food
