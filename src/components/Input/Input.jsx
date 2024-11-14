import { useState } from "react"
import "./Input.css"


const Input = ({ formatNumberChose }) => {
    const [inputNumber, setInputNumber] = useState(1)

    const handleClick = () => {
        formatNumberChose(inputNumber)
    }

    const changeNumber = (e) => {
        setInputNumber(e.target.value)
    }

    const addNumber = () => {
        setInputNumber(inputNumber + 1)
    }
    const subtractNumber = () => {
        inputNumber > 1 ? setInputNumber(inputNumber - 1) : setInputNumber(1)
    }

    return (
        <div className="input-container">
            <p className="input-paragraph">Ingrese un numero del 1 al 826 para seleccionar a un personaje de Rick and Morty</p>
            <div className="input-counterPanel">
                <button className="buttonAddOrSubtract" onClick={subtractNumber}>-</button>
                <input type="number" className="input-input" min={1} max={826} step={1} value={inputNumber} onChange={changeNumber} />
                <button onClick={addNumber} className="buttonAddOrSubtract">+</button>
            </div>
            <div className="effect-card">
                <button className="service-button pulse" onClick={handleClick} >Ver</button>
            </div>
        </div>
    )
}

export default Input