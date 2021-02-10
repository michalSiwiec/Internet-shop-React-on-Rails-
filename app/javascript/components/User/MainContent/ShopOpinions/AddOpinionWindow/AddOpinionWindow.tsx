import React, {FC, useState} from 'react'

import TextArea from './TextArea/TextArea'
import Buttons from './Buttons/Buttons'

interface Props{
    setWantAddOpinion: any,
    userID: number
}

const AddOpinionWindow:FC<Props> = ({setWantAddOpinion, userID}) => {
    const [opinion, setOpinion] = useState('')

    const addOpinion = () => {
        const opinionDetails = {
            opinion,
            userID,
            mark: 2
        }

        fetch("/api/v1/opinions/add", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(opinionDetails)
        })
        .then(() => setWantAddOpinion(false))
    }

    return (
        <div className="add-opinion-window">
            <TextArea opinion={opinion} setOpinion={setOpinion} />
            <Buttons setWantAddOpinion={setWantAddOpinion} addOpinion={addOpinion} />
        </div>
    )
}

export default AddOpinionWindow
