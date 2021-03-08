import axios from 'axios'



export default axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/forecast/daily',
    params: {
        cnt: '7',
    },
    headers: {
        APPID: '0b40dd2eeab6b4d32eb41e3e5b0075c6'
    }
})