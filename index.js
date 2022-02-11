const axios = require('axios')
const key = require("./secret.json") // my local API keys... change this to your keys
const location = "Limeira" // current location the API will get data from
const date = new Date()

const getPage = async ()=>{
    let getJSON = await axios(
        {
            method:"get",
            url:`https://api.weatherapi.com/v1/current.json?key=${key.apiKey}&q=${location}&aqi=no`
        }
    )
    let data = getJSON.data
    let loc = data.location
    let curr = data.current

    return console.log(
`
Hello, today is ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
Currently in ${loc.name}, ${loc.region} - ${loc.country}, it is:
${curr.temp_c} Celsius, it is currently ${curr.condition.text}`
    )
}
getPage()