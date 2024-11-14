import { useState } from "react"
import "./Input.css"


const Input = ({formatNumberChose}) => {
    const [inputNumber, setInputNumber] = useState(1)

    const handleClick = () => {
        formatNumberChose(inputNumber)
    }

    const changeNumber = (e) => {
        setInputNumber(e.target.value)
    }

    return (
        <div className="input-container">
            <p className="input-paragraph">Ingrese un numero del 1 al 826 para seleccionar a un personaje de Rick and Morty</p>
            <input type="number" className="input-input" min={1} max={826} step={1} value={inputNumber} onChange={changeNumber} />
            <button onClick={handleClick} >Ver</button>
        </div>
    )
}

export default Input