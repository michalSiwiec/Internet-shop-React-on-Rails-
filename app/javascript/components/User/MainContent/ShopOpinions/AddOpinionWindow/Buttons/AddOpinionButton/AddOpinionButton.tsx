import React, {FC} from 'react'

interface Props {addOpinion: any}

const AddOpinionButton:FC<Props> = ({addOpinion}) => <button onClick={() => addOpinion()}>Dodaj opinię</button>

export default AddOpinionButton
