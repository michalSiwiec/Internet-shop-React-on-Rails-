import React, {FC} from 'react'

interface Props{
    editProduct: any
}

const EditButton:FC<Props> = ({editProduct}) => {
    return(
        <button onClick={(e) => {
            e.preventDefault()
            editProduct()
        }}>Edytuj</button>
    )
}

export default EditButton
