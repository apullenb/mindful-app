import React, {useState} from 'react'

function Food() {

        const [brkf, setBrkf] = useState('')
        const [lunch, setLunch] = useState('')
        const [din, setDin] = useState('')
        const [snack, setSnack] = useState('')
        const [show, setShow] = useState('')

    const onChangeB = e => setBrkf(e.target.value)
    const close = () => {
     show === ''   setShow('hide')
    }
    return (
        <div className="food">
            <div className='food-box'>
            <p>Breakfast </p>
            <div className ={show}><input type='text' value={brkf} onChange={(e)=> onChangeB(e)}/> <button > +add </button></div>
            </div>
            <div className='food-box'>
            <p>Lunch </p>
            <div className ={show}><input type='text' value={lunch} /><button> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Dinner </p>
            <div className ={show}><input type='text' value={din} /><button> +add </button></div>
            </div>
            <div className='food-box'>
            <p>Snacks </p>
            <div className ={show}><input type='text' value={snack} /><button> +add </button></div>
            </div>
            <button style={{margin:'7px 15px'}} onClick={close}> x close</button>
        </div>
    )
}

export default Food
