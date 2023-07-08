import {container} from "./selectores.js"

 export async function obetenerPokes(){
    const url="https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    try {
        let response = await fetch(url)
        let dato=await response.json()
        console.log(dato)
        getPokemon(dato.results)
        
    } catch (error) {
        console.log(error);
    }
}
async function getPokemon(par){
    
    try {
        par.forEach(async element => {
            let dato= await fetch(element.url)
            let result= await dato.json();
            console.log(result);
        });
    } 
    catch (error) {
        console.log(error)
    }
}