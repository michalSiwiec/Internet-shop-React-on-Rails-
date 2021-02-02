import types from './types'

const logInAdmin = (adminID:number) => ({type: types.LOG_IN, adminID: adminID})
const logOutAdmin = () => ({type: types.LOG_OUT})

export default {
    logInAdmin,
    logOutAdmin
}