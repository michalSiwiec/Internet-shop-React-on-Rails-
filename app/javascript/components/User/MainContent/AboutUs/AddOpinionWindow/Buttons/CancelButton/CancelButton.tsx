import React, {FC} from 'react'

interface Props {
    setWantAddOpinion: any
}

const CancelButton:FC<Props> = ({setWantAddOpinion}) => <button onClick={() => setWantAddOpinion(false)}>Anuluj</button>

export default CancelButton
