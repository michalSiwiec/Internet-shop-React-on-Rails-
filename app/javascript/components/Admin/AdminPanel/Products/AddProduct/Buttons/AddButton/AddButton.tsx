import React, {FC} from 'react'

interface Props {addProduct: (e: React.SyntheticEvent) => void}

const AddButton:FC<Props> = ({addProduct}) => <button className="add-user-form__buttons-container__button" onClick={(e) => addProduct(e)}>Dodaj</button>

export default AddButton
