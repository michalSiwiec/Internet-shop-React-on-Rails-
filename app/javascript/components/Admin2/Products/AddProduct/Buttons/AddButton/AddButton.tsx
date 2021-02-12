import React, {FC} from 'react'

interface Props {addProduct: any}

const AddButton:FC<Props> = ({addProduct}) => <button onClick={(e) => addProduct(e)}>Dodaj</button>

export default AddButton
