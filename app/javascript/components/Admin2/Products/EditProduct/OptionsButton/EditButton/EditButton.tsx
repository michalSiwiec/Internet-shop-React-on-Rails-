import React, {FC} from 'react'

interface Props{editProduct: any}

const EditButton:FC<Props> = ({editProduct}) => <button onClick={(e) => editProduct(e)}>Edytuj</button>

export default EditButton
