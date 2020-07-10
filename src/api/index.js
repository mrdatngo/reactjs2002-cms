import axios from 'axios'

axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem("token")}`;

function login(data) {
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
}

function fetchStatistic() {
    return axios.get("http://medical-backend.herokuapp.com/api/news/get-statistic")
}

export { login, fetchStatistic }