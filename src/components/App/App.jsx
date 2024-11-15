import CardApi from "../CardApi/CardApi.jsx"
import Input from "../Input/input.jsx"
import { useState } from "react"
import "./App.css"

const App = () => {
    const [numberID, setNumberID] = useState()

    const formatNumberChose = (inputNumber) => {
        setNumberID(inputNumber)

    }
    const reset = () => {
        setNumberID(null)
    }
    return (
        <>
            <div className="app-container">
                <h1 className="app-tittle">APIs utilizadas: <span>Cataas</span> & <span>Rick and Morty</span></h1>
                <div className="app-containerCard">
                    {!numberID ?
                        <Input formatNumberChose={formatNumberChose} />
                        : <CardApi numberID={numberID} reset={reset}/>}
                </div>
            </div>

        </>




    )
}
export default App