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
        const {main}=result
        console.log(weather)
        render(weather, result.name, main)
    } catch (error) {
        console.log(error)
        
    }

}
function render(par1,par2, par3){
    const url=`https://openweathermap.org/img/wn/${par1[0].icon}@2x.png`
    container.classList.replace('hidden', 'flex')
    container.innerHTML=`
    <h1 class="flex text-[50px] w-full justify-center items-center">${par2}</h1>
    <p class="text-[20px]">${par1[0].main}</p>
    <p><img src=${url}></p>
    <p>${par1[0].description}</p>
    <p class="text-[20px] text-[white]">Temperatura: ${(parseFloat(par3.temp)-273.15).toFixed(2)}°C</p>
                            `
}