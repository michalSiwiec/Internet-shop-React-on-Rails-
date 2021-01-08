import types from './types'

import produce from 'immer'

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
                const index = draftState.products.findIndex(product => product.id === action.id); // Checking if product is already in to basket
                const productsID:Array<number> = [] // Table id indeks - necessarcy because I'll transmit it into controller and I haven't got access to present state

                console.log(draftState.wholePrice)

                if(index !== -1)
                    draftState.products[index].quantity += action.quantity
                else{
                    draftState.products.push({id: action.id, quantity: action.quantity})
                    productsID.push(action.id)
                }
                // I don't have to create here complicated logic. Why I can't every time make bigger or smaller quantity every time when I wisit this controller?

                state.products.forEach(product => {
                    productsID.push(product.id)
                })

                fetch(`/api/v1/products/showw?products=${productsID}`,{method: 'GET',})
                .then(response => {
                    if(response.ok)
                        return response.json()
                    else
                        throw Error(response.statusText);
                })
                .then(data => {
                    console.log(data)
                    const secondaryWholePrice = 0
                })
                .catch(err => console.error(err))
        })
        case types.REMOVE_PRODUCT:
            return{...state}
        default:
             return state
    }
}

export default basketReducer