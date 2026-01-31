import axios from 'axios'
const API=axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:`Client-ID NJFGgRZNNfWIkodcjykALZuz5aMQhjh_wJ9QlQWWAME`
    }
})
export default API;