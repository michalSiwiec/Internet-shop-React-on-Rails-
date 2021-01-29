import React, {FC} from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../../../../redux/products/duck/actions'


import {Link} from 'react-router-dom'

interface Props {
    productID: string
}

const RemoveButton:FC<Props> = ({productID}) => {
    const dispatch = useDispatch()
    
    const removeProduct = () => {
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
        }

    return (
        <Link to="/admin/">
            <button onClick={removeProduct}>Usuń</button>
        </Link>
    )
}

export default RemoveButton
