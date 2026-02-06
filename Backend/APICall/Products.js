const axios = require("axios");
const API=axios.create({
    baseURL: 'https://app.scrapingbee.com/api/v1/',
     params:{
        api_key:`T8GADPGL0MGFNOL8MWHJCVZ13K2AKTGHCNBL4AXPFRFOGTXOK6ROG9O82E6A9016DFKE0T4G1GCQ570I`
     }
})
module.exports=API