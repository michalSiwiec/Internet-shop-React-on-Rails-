import types from './types'

const singInUser = (userID) => ({type: types.SING_IN_USER, user_id: userID})
const logOutUser = () => ({type: types.LOG_OUT_USER})

export default {
    singInUser,
    logOutUser
}