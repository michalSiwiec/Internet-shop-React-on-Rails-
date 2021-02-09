import React, {FC} from 'react'

interface Props {
    opinion: string,
    setOpinion: any
}

const TextArea:FC<Props> = ({opinion, setOpinion}) => {
    return (
        <div className="description-container">
            <textarea value={opinion} onChange={(e) => setOpinion(e.target.value)} placeholder="Tu wpisz opinię o sklepie"></textarea>
        </div>
    )
}

export default TextArea
