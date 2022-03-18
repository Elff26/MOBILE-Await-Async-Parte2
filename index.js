require('dotenv').config()
const axios = require ('axios')

//operador de desestruturação
const { APPID, PROTOCOL, BASE_URL, UNITS, LANGUAGE, Q, CNT } = process.env

const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}`

//console.log(url)

//processamento sincrono - bloqueante 
// const resultado = axios.get(url)

// axios.get(url)
// .then(res => console.log(res.data))


axios.get(url)
.then(res => {
    //console.log(res.data)
    return res.data
})
.then(res => {
    console.log(res)
    return res
})
.then(res => {
    console.log(res.cnt)
    return res
})
.then(res => {
    return res.list
})
.then(res => {
    res.forEach(element => {
        console.log("temp_min: " + element.main.temp_min + " temp_max: " + element.main.temp_max)
        console.log("description: " + element.weather[0].description + "\n") //element.weather[0] pq o weather está associado a um vetor 
    });
})

