import React, {FC, useState} from 'react'

import TextArea from './TextArea/TextArea'
import Marks from './Marks/Marks'
import Buttons from './Buttons/Buttons'

interface Props{
    setWantAddOpinion: any,
    userID: number
}

const AddOpinionWindow:FC<Props> = ({setWantAddOpinion, userID}) => {
    const [opinionContent, setOpinionContent] = useState('')
    const [opinionMark, setOpinionMark] = useState(5)

    const addOpinion = () => {
        const opinionParams = {
            opinionDetails: {
                description: opinionContent,
                mark: opinionMark,
                user_id: userID
            },
        }

        fetch("/api/v1/opinions/add", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(opinionParams)
        })
        .then(() => setWantAddOpinion(false))
    }

    return (
        <div className="add-opinion-window">
            <TextArea opinion={opinionContent} setOpinion={setOpinionContent} />
            <Marks setOpinionMark={setOpinionMark} />
            <Buttons setWantAddOpinion={setWantAddOpinion} addOpinion={addOpinion} />
        </div>
    )
}

export default AddOpinionWindow
