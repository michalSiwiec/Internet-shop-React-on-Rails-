import React, {useState, useEffect} from 'react'

import Opinion from './Opinion/Opinion'

const Opinions = () => {
    const [opinions, setOpinions]: any = useState([])

    useEffect(() => {
        fetch('/api/v1/opinions',{method: 'GET'})
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then(opinions_ => {
            if(JSON.stringify(opinions_) !== JSON.stringify(opinions))
                setOpinions(opinions_)
        })
    })

    return(
        <>
            {opinions.map(opinion => <Opinion opinion={opinion} key={`opinion${opinion.dataCreated}`}/>)}
        </>
    )
}

export default Opinions
