import React, {FC, useEffect, useState} from 'react'

import '../../../assets/stylesheets/Communicate/Communicate.scss'

interface Props {
    info: string,
    setTransmittedState?: any
}

const WindowCommunicate:FC<Props> = ({info, setTransmittedState}) => {
    const [hide, setHide] = useState('')
    let hideEffect
    let removingElementEffect

    useEffect(() => {
        const timeVisibiltyWindow = 2000
        hideEffect = setTimeout(() => setHide('hide'),timeVisibiltyWindow)

        if(setTransmittedState){
            const timeRemovingWindow = 5000
            removingElementEffect = setTimeout(() => setTransmittedState(false), timeRemovingWindow)
        }

        return () => {
            clearTimeout(removingElementEffect)
            clearTimeout(hideEffect)
          }
    })

    return (
        <div className={`window-information ${hide}`}>
            <h3>{info}</h3>
        </div>
    )
}

export default WindowCommunicate
