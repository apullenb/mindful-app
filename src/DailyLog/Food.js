import React, {useState} from 'react'

function Food() {

        const [brkf, setBrkf] = useState('')
        const [lunch, setLunch] = useState('')
        const [din, setDin] = useState('')
        const [snack, setSnack] = useState('')
        const [show, setShow] = useState('')

    return (
        <div className="">
            <h4>Meals Today:</h4>
            <button>+Add New</button>

        </div>
    )
}

export default Food
