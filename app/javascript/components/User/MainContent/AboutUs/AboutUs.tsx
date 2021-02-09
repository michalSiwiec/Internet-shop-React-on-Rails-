import React, {useState} from 'react'

import AddOpinionButton from './AddOpinionButton/AddOpinionButton'
import Opinions from './Opinions/Opinions'
import AddOpinionWindow from './AddOpinionWindow/AddOpinionWindow'

import {useSelector} from 'react-redux'

const AboutUs = () => {
    const [wantAddOpinion, setWantAddOpinion] = useState(false)
    const userID = useSelector((state: any) => state.userReducer.user.userID)

    const showWindow = () => {
        if(userID !== 0)
            setWantAddOpinion(true)
        else
            alert('Zaloguj sie')
    }

    return (
        <>
            <div className="about-us-container">
                <AddOpinionButton showWindow={showWindow} />
                <Opinions />
            </div>

            {wantAddOpinion === true ? <AddOpinionWindow setWantAddOpinion={setWantAddOpinion} userID={userID} /> : null}
        </>
    )
}

export default AboutUs
