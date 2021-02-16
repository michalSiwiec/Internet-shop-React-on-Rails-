import React, {useEffect, useState} from 'react'

import Header from './Header/Header'
import Opinion from './Opinion/Opinion'

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
            <Header />
            {opinions.map(opinion => <Opinion opinion={opinion} key={`opinion-container ${opinion.dataCreated}`} />)}
        </div>
    )
}

export default Opinions
