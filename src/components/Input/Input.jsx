import { useState } from "react"
import "./Input.css"
import Swal from 'sweetalert2'



const Input = ({ formatNumberChose }) => {
    const [inputNumber, setInputNumber] = useState(1)

    const handleClick = () => {
        (inputNumber>0 & inputNumber<827) 
        ? formatNumberChose(inputNumber)
        : Swal.fire({
            title: 'Error!',
            text: 'El numero elegido debe estar entre 1 y 826',
            icon: 'error',
            confirmButtonText: 'OK',
            className: "alert"
          })
    }

    const changeNumber = (e) => {
        setInputNumber(e.target.value)
    }

    const addNumber = () => {
        setInputNumber(parseInt(inputNumber) + 1)
    }
    const subtractNumber = () => {
        setInputNumber(parseInt(inputNumber) - 1) 
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