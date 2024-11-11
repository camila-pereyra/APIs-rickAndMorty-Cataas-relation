import { useEffect, useState } from "react"
import "./CardApi.css"

const API_RICK_AND_MORTY = 'https://rickandmortyapi.com/api/character/1'

const CardApi = () => {
    const [rickAndMortyName, setRickAndMortyName] = useState()
    const [rickAndMortyImage, setRickAndMortyImage] = useState()
    const [cataasImage, setCataasImage] = useState()

    useEffect(() => {
        fetch(API_RICK_AND_MORTY)
            .then((res) => res.json())
            .then((data) => {
                const firstName = data.name.split(' ')[0]
                setRickAndMortyName(data.name)
                setRickAndMortyImage(data.image)
                fetch(`https://cataas.com/cat/says/Hello%20${firstName}`)
                    .then(res => {
                        setCataasImage(res.url)
                    })
            })
    }, [])

    return (
        <div className="api-containerGral">
            <div className="api-container">
                <strong className="api-name">I am {rickAndMortyName}</strong>
                <img className="api-image" src={rickAndMortyImage} />
            </div>
            <div className="api-container">
                <img className="api-image" src={cataasImage} />
            </div>
        </div>
    )
}

export default CardApi
