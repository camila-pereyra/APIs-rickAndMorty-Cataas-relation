import { useEffect, useState } from "react"
import "./CardApi.css"


const CardApi = ({numberID}) => {
    const [rickAndMortyName, setRickAndMortyName] = useState()
    const [rickAndMortyImage, setRickAndMortyImage] = useState()
    const [cataasImage, setCataasImage] = useState()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${numberID}`)
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
        <>
            <div className="api-container">
                <strong className="api-name">I am {rickAndMortyName}</strong>
                <img className="api-image" src={rickAndMortyImage} />
            </div>
            <div className="api-container">
                <img className="api-image" src={cataasImage} />
            </div>
        </>
    )
}

export default CardApi
