import types from './types'

const addProductToBasket = (productsID:number, quantity:number) => ({type: types.ADD_PRODUCT, id: productsID, quantity: quantity})
const removeProductFromBasket = () => ({type: types.REMOVE_PRODUCT})

export default {
    addProductToBasket,
    removeProductFromBasket
}