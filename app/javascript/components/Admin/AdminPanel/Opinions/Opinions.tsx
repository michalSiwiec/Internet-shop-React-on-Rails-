import React, {useEffect, useState} from 'react'

import {IOpinion} from '../../../../../TypeScript/Interfaces/Interfaces'

import Header from './Header/Header'
import Opinion from './Opinion/Opinion'

const Opinions = () => {
    const [opinions, setOpinions] = useState<Array<IOpinion>>([])

    useEffect(() => {
        fetch('/api/v1/opinions/', {method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((opinions_: Array<IOpinion>) => setOpinions(opinions_))
    }, [])

    return (
        <div className="opinions-container">
            <Header />
            {opinions.map((opinion: IOpinion) => <Opinion opinion={opinion} key={`opinion-container ${opinion.dataCreated}`} />)}
        </div>
    )
}

export default Opinions

