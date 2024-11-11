import "./Input.css"
const Input = () => {
    return (
        <div className="input-container">
            <p className="input-paragraph">Ingrese un numero del 1 al 826 para seleccionar a un personaje de Rick and Morty</p>
            <input type="number" className="input-input" min={1} max={10} step={1} />
            <button>Ver</button>
        </div>
    )
}

export default Input