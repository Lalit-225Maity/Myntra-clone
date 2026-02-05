import axios from "axios";
const API=axios.create({
    baseURL: 'https://app.scrapingbee.com',
    params:{
        api_key:'I0H0PXY0KOUVE8IK9F2RPGAWWBCUZMETKZ7XJ1841WUAH2984HXI373Y0IVV8YQ2NUDQ0P7VBI8RPVI4'
    }
})
export default API;