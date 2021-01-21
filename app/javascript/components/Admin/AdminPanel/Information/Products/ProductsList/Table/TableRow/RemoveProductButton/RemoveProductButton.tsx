import React, {FC} from 'react'

import {useDispatch} from 'react-redux'
import actions from '../../../../../../../../../../redux/products/duck/actions'

interface Props {
    productID: number
}

const RemoveProductButton:FC<Props> = ({productID}) => {
    const dispatch = useDispatch()

    const removeProduct = (id:number) => {
        const decision = confirm("Czy chcesz usnąć ten produkt?");
        
        if(decision){
            console.log('I am rwemoving')
                fetch(`/api/v1/products/remove_product`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productID: id
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
    }

    return (
        <div><button className="remove-button" onClick={() => removeProduct(productID)}>Usuń</button></div>
    )
}

export default RemoveProductButton
