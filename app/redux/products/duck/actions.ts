import types from  './types'

interface IProduct{
    id: number
    source: string
    description: string
    price: number
    key_word: string
    product_type: string
}

const setProduct = (products:Array<IProduct>, productType:string) => ({type: types.SET_PRODUCTS, products: products, productType: productType})
const setType = (type:string) => ({type: types.SET_TYPE, productType: type})
const setProductsPartsVisibility = (productsPartsVisibility:Array<string>) => ({type: types.SET_PRODUCTS_VISIBILITY, productsPartsVisibility: productsPartsVisibility})

export default {
    setProduct,
    setType,
    setProductsPartsVisibility
}