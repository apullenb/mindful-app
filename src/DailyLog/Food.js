import React, {useState} from 'react'

function Food() {

        const [brkf, setBrkf] = useState('')
        const [lunch, setLunch] = useState('')
        const [din, setDin] = useState('')
        const [snack, setSnack] = useState('')
        const [show, setShow] = useState('')

    return (
        <div className="food">
            <p>Breakfast <button> +add </button></p>
            <p>Lunch <button> +add </button></p>
            <p>Dinner <button> +add </button></p>
            <p>Snacks <button> +add </button></p>

        </div>
    )
}

export default Food
