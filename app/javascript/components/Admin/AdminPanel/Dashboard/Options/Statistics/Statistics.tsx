import React from 'react'

import {Link, useRouteMatch} from 'react-router-dom'

const Statistics = () => {
    const {path} = useRouteMatch()

    return (
        <div className="option-container bigger-container statistics-container">  
            <div className="overlay overlay--full">
                <Link to={`${path}Statistics`}>
                    <span>Wejdz!</span>
                </Link>
            </div>
        </div>
    )
}

export default Statistics
