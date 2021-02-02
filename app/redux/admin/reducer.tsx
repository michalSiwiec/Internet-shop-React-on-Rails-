import types from './types'

import {produce} from 'immer'

const initialState = {
    admin: {
        id: 0,
        logIn: false
    }
}

const adminsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LOG_IN:
            return produce(state, draftState => {
                draftState.admin.id = action.adminID
                draftState.admin.logIn = true
            })
        case types.LOG_OUT:
            return produce(state, draftState => {
                draftState.admin.id = 0
                draftState.admin.logIn = false
            })
        default:
            return state
    }
}

export default adminsReducer