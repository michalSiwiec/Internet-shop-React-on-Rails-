import types from './types'

// I should do here every methods to fetch products, not into components.

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

const changeProductQuantity = (productID:number, quantityAddedOrSubstractedProduct:number, price: number) => ({
    type: types.CHANGE_PRODUCT_QUANTITY,
    productID,
    quantityAddedOrSubstractedProduct,
    price
})

export default {
    addProductToBasket,
    removeProductFromBasket,
    changeProductQuantity
}