import types from './types'

import {produce} from 'immer'

const initialState:IInitialState = {
    products: [],
    wholePrice: 0
}

interface IInitialState{
    products: Array<{id: number, quantity: number}>,
    wholePrice: number
}

const basketReducer = (state = initialState, action) => {    
    switch(action.type){
        case types.ADD_PRODUCT:
            return produce(state, draftState => {
                const index = draftState.products.findIndex(product => product.id === action.id)
    
                if(index !== -1)
                    draftState.products[index].quantity += action.quantity
                else
                    draftState.products.push({id: action.id, quantity: action.quantity})

                draftState.wholePrice += (action.quantity * action.price)
            })

        case types.REMOVE_PRODUCT:
            return produce(state, draftState => {
                const id = action.id
                const quantity = action.quantity

                draftState.products = draftState.products.filter(product => product.id !== id)
                draftState.wholePrice -= (quantity * action.price)
                
                // console.log(typeof quantity)
                // console.log(typeof draftState.wholePrice)
                // console.log(typeof action.price)
                // draftState.wholePrice = parseFloat(draftState.wholePrice).toFixed(0)
                // draftState.wholePrice = (draftState.wholePrice - (quantity * action.price))
                // draftState.wholePrice = parseInt(draftState.wholePrice)
            })

        case types.CHANGE_PRODUCT_QUANTITY:
            return produce(state, draftState => {
                const updatedProduct:any = draftState.products.find(product => product.id === action.productID)
                
                updatedProduct.quantity += action.quantityAddedOrSubstractedProduct
                draftState.wholePrice += (action.quantityAddedOrSubstractedProduct * action.price)
            })

        case types.RESET_BASKET:
            return produce(state, draftState => {
                draftState.products = []
                draftState.wholePrice = 0
            })
            
        default:
             return state
    }
}

export default basketReducer