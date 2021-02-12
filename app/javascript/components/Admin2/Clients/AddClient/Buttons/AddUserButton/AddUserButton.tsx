import React, {FC} from 'react'

interface Props{addUser: any}

const AddUserButton:FC<Props> = ({addUser}) => <button onClick={(e) => addUser(e)}>Dodaj</button>

export default AddUserButton
