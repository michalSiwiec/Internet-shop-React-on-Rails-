import types from './types'

const singInUser = (userID) => ({type: types.SING_IN_USER, user_id: userID})

export default {
    singInUser
}