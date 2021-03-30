import React, {FC} from 'react'

interface Props{addUser: (e: React.FormEvent<EventTarget>) => void}

const AddUserButton:FC<Props> = ({addUser}) => <button onClick={(e) => addUser(e)} className="buttons-part-container__button">Dodaj</button>

export default AddUserButton
