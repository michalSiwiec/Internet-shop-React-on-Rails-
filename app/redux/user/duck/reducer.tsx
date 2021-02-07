import types from './types'

import {produce} from 'immer'

interface InitialState {
    user: {
        userID: number,
        logIn: boolean
    }
}

const initialState: InitialState = {
    user: {
        userID: 0,
        logIn: false
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SING_IN_USER:
            return produce(state, draftState => {
                draftState.user.userID = action.user_id
                draftState.user.logIn = true
            })
        case types.LOG_OUT_USER:
            return produce(state, draftState => {
                draftState.user.userID = 0
                draftState.user.logIn = false
            })
        default:
            return state
    }
}

export default userReducer