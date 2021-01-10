import types from './types'

const addProductToBasket = (productsID: number, quantity:number, price: number) => ({
    type: types.ADD_PRODUCT,
    id: productsID,
    quantity: quantity,
    price: price
})

const removeProductFromBasket = (productID:number, productQuantity, price: number) => ({
    type: types.REMOVE_PRODUCT,
    id: productID,
    quantity: productQuantity,
    price
})

export default {
    addProductToBasket,
    removeProductFromBasket
}