import types from './types'

const initialState = {
    products: [],
    productType: "",
    productsPartsVisibility: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SET_PRODUCTS:
            return {...state, products: action.products, productType: action.productType}
        case types.SET_TYPE:
            return {...state, productType: action.productType}
        case types.SET_PRODUCTS_VISIBILITY:
            return {...state, productsPartsVisibility: action.productsPartsVisibility}
        default:
            return state
    }
}

export default productsReducer