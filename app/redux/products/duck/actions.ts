import types from  './types'

import {IProduct} from '../../../TypeScript/Interfaces/Interfaces'

const setProduct = (products:Array<IProduct>, productType:string) => ({type: types.SET_PRODUCTS, products: products, productType: productType})
const setType = (type:string) => ({type: types.SET_TYPE, productType: type})

export default {
    setProduct,
    setType
}