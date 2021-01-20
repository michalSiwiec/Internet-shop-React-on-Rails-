import types from './types'

const logInAdmin = (adminID:number) => ({type: types.LOG_IN, adminID: adminID})

export default {
    logInAdmin,
}