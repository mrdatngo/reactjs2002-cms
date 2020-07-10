import { LOGIN } from '../constants/ActionType'
import { onLogin } from '../api/index'

const loggedIn = (data) => ({
    type: LOGIN,
    data
})

const login = () => (dispatch) => {
    onLogin().then( (data) => {
        console.log("data", data)
        return dispatch(loggedIn(data))
    })
}

export {
    login
}