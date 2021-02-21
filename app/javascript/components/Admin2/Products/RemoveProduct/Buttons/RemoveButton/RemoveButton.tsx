import React, {FC} from 'react'

import {useHistory} from 'react-router-dom'

import {IProduct} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../../redux/products/duck/actions'

interface Props {productID: string}

const RemoveButton:FC<Props> = ({productID}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const removeProduct = (e: React.SyntheticEvent) => {
        e.preventDefault()

        fetch(`/api/v1/products/${productID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((products: Array<IProduct>) => dispatch(actions.setProduct(products, 'all')))
        .then(() => history.push('/admin/Products'))
    }

    return (
        <button onClick={(e) => removeProduct(e)} className="buttons-container__button">Usuń</button>
    )
}

export default RemoveButton
