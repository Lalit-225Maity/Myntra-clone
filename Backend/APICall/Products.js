const axios = require("axios");
const API=axios.create({
    baseURL: 'https://app.scrapingbee.com/api/v1/',
     params:{
        api_key:`ME20DKX0A8PZCH158BDKTR6EK8SR3GLX1WUQEQWYNVKLZPFI430ETQ9N81UAEJBBI2LWD70FECW048X8`
     }
})
module.exports=API