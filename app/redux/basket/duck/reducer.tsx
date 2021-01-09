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
                const index = draftState.products.findIndex(product => product.id === action.id) // Checking if product is already in to basket
    
                if(index !== -1)
                    draftState.products[index].quantity += action.quantity
                else
                    draftState.products.push({id: action.id, quantity: action.quantity})

                draftState.wholePrice += (action.quantity * action.price)
            })
        case types.REMOVE_PRODUCT:
            return{...state}
        default:
             return state
    }
}

export default basketReducer