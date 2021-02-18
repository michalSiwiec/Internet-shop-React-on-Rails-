import types from  './types'

import {IProduct} from '../../../TypeScript/Interfaces/Interfaces'

const setProduct = (products:Array<IProduct>, productType:string) => ({type: types.SET_PRODUCTS, products: products, productType: productType})
const setType = (type:string) => ({type: types.SET_TYPE, productType: type})
const setProductsPartsVisibility = (productsPartsVisibility:Array<string>) => ({type: types.SET_PRODUCTS_VISIBILITY, productsPartsVisibility: productsPartsVisibility})

export default {
    setProduct,
    setType,
    setProductsPartsVisibility
}