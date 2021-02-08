import React, {FC, useEffect, useState} from 'react'

interface Props{
    setProductAdded: any
}

const AddedProductWindow:FC<Props> = ({setProductAdded}) => {
    const [hide, setHide] = useState('')
    
    useEffect(() => {
        const timeVisibiltyWindow = 2000
        const timeRemovingWindow = 5000

        setTimeout(() => setHide('hide'),timeVisibiltyWindow)
        setTimeout(() => setProductAdded(false), timeRemovingWindow)
    })

    return (
        <div className={`added-product-window-information ${hide}`}>
            <h3>Produkt dodany do koszyka!</h3>
        </div>
    )
}

export default AddedProductWindow
