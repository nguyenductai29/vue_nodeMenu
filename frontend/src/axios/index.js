import axios from 'axios'

// axios デフォルト設定
axios.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL
axios.defaults.timeout = process.env.VUE_APP_AXIOS_TIMEOUT ?? 30000
axios.interceptors.request.use(request => request, error => Promise.reject(error))
axios.interceptors.response.use(response => response, error => Promise.reject(error))

export default axios
