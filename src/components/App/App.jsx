import CardApi from "../CardApi/CardApi.jsx"
import Input from "../Input/input.jsx"
import { useState } from "react"
import "./App.css"

const App = () => {
    const [numberID, setNumberID] = useState()

    const formatNumberChose = (inputNumber) => {
        setNumberID(inputNumber)
        console.log("Numero que llega al apretar boton ", numberID);

    }
    return (
        <>
            <div className="app-container">
                <h1 className="app-tittle">APIs CataasAPI & Rick and Morty</h1>
                <div className="app-containerCard">
                    {!numberID ?
                        <Input formatNumberChose={formatNumberChose} />
                        : <CardApi numberID={numberID} />}
                </div>
            </div>

        </>




    )
}
export default App