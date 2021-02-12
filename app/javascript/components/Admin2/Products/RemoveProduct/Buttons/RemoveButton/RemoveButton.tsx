import React, {FC} from 'react'

import {Link, useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../../redux/products/duck/actions'

interface Props {
    productID: string
}

const RemoveButton:FC<Props> = ({productID}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const removeProduct = (e) => {
        e.preventDefault()

        fetch(`/api/v1/products/remove_product`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productID: productID
            })
        })
        .then(response => {
            if(response.ok)
                return response.json()
            else
                throw Error(response.statusText);
        })
        .then((data) => dispatch(actions.setProduct(data, 'all')))
        .then(() => history.push('/admin/Products'))
    }

    return (
        <button onClick={(e) => removeProduct(e)}>Usuń</button>
    )
}

export default RemoveButton
