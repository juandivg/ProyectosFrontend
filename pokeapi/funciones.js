import {container} from "./selectores.js"
container.innerHTML="";
 export async function obetenerPokes(){
    const url="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
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
            renderPokes(result)
        });
    } 
    catch (error) {
        console.log(error)
    }
}
async function renderPokes(par){
    const url=par.sprites.front_default
    container.innerHTML+=`<div class="flex flex-col bg-yellow-400 justify-center items-center border border-black rounded-md">
                            <h1 class="text-[30px] font-bold">${par.name}</h1>
                            <img class="w-[150px] h-[150px]" src=${url}></div>`;
}