import React, {FC, useState, useEffect} from 'react'

import {IProduct} from '../../../../../../../TypeScript/Interfaces/Interfaces'

import ProductsRow from './ProductsRow/ProductsRow'
import Product from './Product/Product'
import Switch from './Switch/Switch'

interface Props{products: Array<IProduct>, productsPartsVisibility: Array<string>}

const Products:FC<Props> = ({products, productsPartsVisibility}) => {

    const setValueClassRow = () => {
        let quantityRow: (null | number) = null
        const classRowBuff: Array<string> = []

        if(products.length % 6 === 0)
            quantityRow = products.length / 6
        else
            quantityRow = Math.floor((products.length / 6) + 1)

        for(let i = 0; i < quantityRow; ++i){
            classRowBuff.push("hidden")
        }
        classRowBuff[0] = ""

        return classRowBuff
    }

    const [classRow, setClassRow] = useState<Array<any>>(setValueClassRow())

    let productsInRow: Array<any> = []
    const productsRow :Array<any> = []
    const switches: Array<any> = []
    let counter = 0

    products.forEach((product, index) => {
        productsInRow.push(<Product product={product} />)

        if(productsInRow.length === 6 || index === (products.length - 1)){
            productsRow.push(<ProductsRow productsInRow={productsInRow} className={classRow[counter]} key={`productRow${index}`} />)
            switches.push(<Switch rowNumber={counter} setClassRow={setClassRow} classRow={classRow} key={`switch${index}`}/>)
            productsInRow = []
            ++counter
        }
    })

    useEffect(() => {
        setClassRow(setValueClassRow())
    }, [products.length])
   
    return (
        <>
            <div className="products-container">
                {productsRow}
            </div>

            <div className="switch-container">
                {switches}
            </div>
        </>
    )
}

export default Products
