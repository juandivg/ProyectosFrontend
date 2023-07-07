import {inp, btn, container} from './selectores.js'




function obtenerCiudad(par){
    const url=`http://api.openweathermap.org/geo/1.0/direct?q=${par}&limit=1&appid=96c05209cc9eab38a2f6be426e28227e`
    return url
}
function obtenerClima(la, lo){
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=96c05209cc9eab38a2f6be426e28227e`
    return url
}
 export async function capturarDAtos(){
    try {
        const dato= await fetch(obtenerCiudad(inp.value))
        const result=await dato.json()
        console.log("hola")
        mostrarClima(result)
    } catch (error) {
        console.log(error)
    }


}
async function mostrarClima(par){
    const {lat, lon}= par[0]
    console.log(par)
    console.log(lat,lon)
    
    try {
        const dato= await fetch(obtenerClima(lat, lon))
        const result=await dato.json()
        console.log(result)
        const {weather}=result
        console.log(weather)
        render(weather)
    } catch (error) {
        console.log(error)
        
    }

}
function render(par){
    const url=`https://openweathermap.org/img/wn/${par[0].icon}@2x.png`
    container.innerHTML=`<p>${par[0].main}</p>
                        <p><img src=${url}></p>
                        <p>${par[0].description}</p>`
}