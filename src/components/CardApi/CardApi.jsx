import { useEffect, useState } from "react"
import "./CardApi.css"


const CardApi = ({ numberID }) => {
    const [rickAndMortyName, setRickAndMortyName] = useState()
    const [rickAndMortyStatus, setRickAndMortyStatus] = useState()
    const [rickAndMortySpecies, setRickAndMortySpecies] = useState()
    const [rickAndMortyImage, setRickAndMortyImage] = useState()
    const [cataasImage, setCataasImage] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${numberID}`)
            .then((res) => res.json())
            .then((data) => {
                const firstName = data.name.split(' ')[0]
                setRickAndMortyName(data.name)
                setRickAndMortyStatus(data.status)
                setRickAndMortySpecies(data.species)
                setRickAndMortyImage(data.image)
                fetch(`https://cataas.com/cat/says/Hola%20${firstName}`)
                    .then(res => {
                        setCataasImage(res.url)
                    })
            })
    }, [])

    return (
        <>
            <div className="api-container">
                <strong className="api-used">Rick and Morty API</strong>
                <strong className="api-name">Personaje elegido: {numberID}</strong>
                <strong className="api-name">Nombre: {rickAndMortyName}</strong>
                <strong className="api-name"> Estado: {rickAndMortyStatus}</strong>
                <strong className="api-name"> Especie: {rickAndMortySpecies}</strong>
                <img className="api-image" src={rickAndMortyImage} />
            </div>
            <div className="api-container">
                <strong className="api-used">Cataas API</strong>
                <strong className="api-name">Devuelve una imagen de un gato saludando al personaje elegido: {rickAndMortyName}</strong>
                <img className="api-image" src={cataasImage} />
            </div>
        </>
    )
}

export default CardApi
