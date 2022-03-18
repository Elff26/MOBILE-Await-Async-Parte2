// require('dotenv').config()
// const axios = require ('axios')

// //operador de desestruturação
// const { APPID, PROTOCOL, BASE_URL, UNITS, LANGUAGE, Q, CNT } = process.env

// const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}`

// //console.log(url)

// //processamento sincrono - bloqueante 
// // const resultado = axios.get(url)

// // axios.get(url)
// // .then(res => console.log(res.data))


//Parecido com inferno de callbacks
// axios.get(url)
// .then(res => {
//     //console.log(res.data)
//     return res.data
// })
// .then(res => {
//     console.log(res)
//     return res
// })
// .then(res => {
//     console.log(res.cnt)
//     return res
// })
// .then(res => {
//     return res.list
// })
// .then(res => {
//     res.forEach(element => {
//         console.log("temp_min: " + element.main.temp_min + " temp_max: " + element.main.temp_max)
//         console.log("description: " + element.weather[0].description + "\n") //element.weather[0] pq o weather está associado a um vetor 
//     });
// })

//promises: ECMAScript 2015
//async/await: ECMAScript 2017
// function hello (nome){
//     return `Hello, ${nome}`
// }

// const resultado = hello("Ana")
// console.log("Até mais!")

//transformando em promise
// function hello (nome){
//     return new Promise(
//         function (resolve, reject){
//             resolve(`Hello, ${nome}`)
//     })
// }

// const resultado = hello("Ana")
// resultado.then(res => console.log(res))

//Sem fazer manualmente
//Função assincrona opera devolvendo uma promise 
//Função async respeita o metodo aberto-fechado 
// async function hello (nome){
//     return `Hello, ${nome}`
// }

// const resultado = hello("Ana")
// resultado.then(res => console.log(res))

function fatorial(n){
    if(n < 0) return Promise.reject("Valor não pode ser negativo") //outra maneira de identar
    
    let = res = 1
    for(let i = 2; i<= n; i++){
        res *= i
    }

    return Promise.resolve(res)
}

//se assemelha com o processamento bloqueante
// function chamadaComThenCatch(){
//     fatorial(10)
//     .then(res => console.log(res))
//     .catch(erro => console.log(erro))

//     fatorial(-10)
//     .then(res => console.log(res))
//     .catch(erro => console.log(erro))
// }

// chamadaComThenCatch()

//Agendar execução
async function chamadaComAsynAwait(){
    try{
        const fat = await fatorial(10)
        console.log(fat)
    
        const fatError = await fatorial(-10)
        console.log(fatError)
    }
    catch(exception){
        console.log(exception)
    }
}

chamadaComAsynAwait()