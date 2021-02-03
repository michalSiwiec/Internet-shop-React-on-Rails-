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
            console.log('sing in user')
            return produce(state, draftState => {
                draftState.user.userID = action.user_id
                draftState.user.logIn = true
            })
        default:
            return state
    }
}

export default userReducer