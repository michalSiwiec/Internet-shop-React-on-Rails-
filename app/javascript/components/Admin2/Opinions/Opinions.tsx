import React, {useEffect, useState} from 'react'

const Opinions = () => {
    const [opinions, setOpinions]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/opinions/', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(opinions_ => setOpinions(opinions_))
    }, [])

    return (
        <div className="opinions-container">
            <h2>Opinions list</h2>

            {opinions.map(opinion => {
                return(
                    <div className="opinion-container" key={`opinion-container ${opinion.dataCreated}`}>
                        <div className="description-container">
                            <q>{opinion.description}</q>
                        </div>

                        <div className="owner-data-container">
                            <p>{`${opinion.name} ${opinion.surname}`} <span>{opinion.dataCreated}</span></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Opinions
