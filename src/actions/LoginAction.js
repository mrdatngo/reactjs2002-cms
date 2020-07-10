import { LOGIN } from '../constants/ActionType'
import { onLogin } from '../api/index'

const loggedIn = (data) => ({
    type: LOGIN,
    data
})

const login = (data) => (dispatch) => {
    return onLogin(data).then( (data) => {
        console.log("data", data)
        return dispatch(loggedIn(data))
    })
}

export {
    login
}