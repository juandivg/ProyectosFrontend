import {inp, btn, container} from './selectores.js'




function obtenerCiudad(par){
    const url=`http://api.openweathermap.org/geo/1.0/direct?q=${par}&limit=1&appid=96c05209cc9eab38a2f6be426e28227e`
    return url
}
function obtenerClima(la, la){
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${la}&appid=96c05209cc9eab38a2f6be426e28227e`
    return url
}
 export async function capturarDAtos(){
    try {
        const dato= await fetch(obtenerCiudad(inp.value))
        const result=await dato.json()
        mostrarClima(result)
    } catch (error) {
        console.log(error)
    }


}
async function mostrarClima(par){
    const {lat, lon}= par
    
    try {
        const dato= await fetch(obtenerClima(lat, lon))
        const result=await dato.json()
        const {weather}=result
        render(weather)
    } catch (error) {
        console.log(error)
        
    }

}
function render(par){
    const url=`https://openweathermap.org/img/wn/${par.icon}@2x.png`
    const img=document.createElement('img')
    img.setAttribute('src', url)
    container.innerHTML=`<p>${par.main}</p>
                        <p>${img}</p>
                        <p>${par.description}</p>`
}