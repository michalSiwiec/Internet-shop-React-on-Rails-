import React, {FC} from 'react'

interface Props {editUser: (e: React.SyntheticEvent) => void}

const EditButton:FC<Props> = ({editUser}) => <button onClick={(e) => editUser(e)}>Edytuj</button>

export default EditButton
