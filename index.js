const axios = require('axios')
const key = require("./secret.json") // my local API keys... change this to your keys
const location = "Limeira" // current location the API will get data from
const date = new Date()

const getPage = async () => {
    try {
        let getJSON = await axios(
            {
                method: "get",
                url: `https://api.weatherapi.com/v1/current.json?key=${key.apiKey}&q=${location}&aqi=no`,
                timeout: 1000
            }
        )
        let data = getJSON.data
        let loc = data.location
        let curr = data.current

        return console.log(
            `\b\b\b\bHello, today is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
    \b\b\b\bCurrently in ${loc.name}, ${loc.region} - ${loc.country}, it is:
    \b\b\b\b${curr.temp_c} Celsius, it is currently ${curr.condition.text}`
        )
    }
    catch (err) {
        console.log("an error occurred... \nProbably timeout... \nexiting",);
    }
}
getPage()