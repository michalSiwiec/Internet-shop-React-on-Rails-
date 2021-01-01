import React, {FC, useState, useEffect} from 'react'

import Product from './Product/Product'
import Switch from './Switch/Switch'

interface Props{
    products: Array<IProduct>
}

interface IProduct{
    id: number
    source: string
    description: string
    price: number
    key_word: string
}

const Products:FC<Props> = ({products}) => {

    const [productsPartsVisibility, setProductsPartsVisibility] = useState<Array<string>>([])

    useEffect(() => {     
        const secondaryProductsPartsVisibility:Array<string> = []

        products.forEach((product, index) => {
            if(index % 6 == 0)
                secondaryProductsPartsVisibility.push("inVisibly")
        })
        secondaryProductsPartsVisibility[0] = "flex-container"
        setProductsPartsVisibility(secondaryProductsPartsVisibility)
    },[])

    const changeProductsContainer = (e:Event) => {
        let id = (e.target as HTMLInputElement).id.slice(6)
        const copyProductsPartsVisibility = productsPartsVisibility.map(element => element = "inVisibly")

        copyProductsPartsVisibility[id] = "flex-container"

        setProductsPartsVisibility(copyProductsPartsVisibility)
    }

    const divideOnSubparts = () => {
        const partsContainers:Array<object> = []
        const partsProducts:Array<IProduct> = []
        const switchesProductsContainers:Array<object> = []
        let counter = 0;

        products.forEach((product, index) => {
            partsProducts.push(product)

            if(index % 6 === 5 || index === products.length-1){
                switchesProductsContainers.push(
                    <Switch 
                        value={counter + 1}
                        changeProductsContainer={(e) => changeProductsContainer(e)}
                        key={`counter${counter}`}
                        id={`switch${counter}`}
                    />
                )

                partsContainers.push(
                    <div className={`products-part-container ${productsPartsVisibility[counter]}`} key={`Prosdsquscts part${product.id}`}>
                        {partsProducts.map((product) => <Product product={product} key={product.id}/>)}
                    </div>
                )
                partsProducts.splice(0, partsProducts.length)
                ++counter
            }
        })

        return(
            <>
                <div>{partsContainers}</div>
                <div className="switches-container">{switchesProductsContainers}</div>
            </>
        ) 
    }

    return divideOnSubparts()
}

export default Products
