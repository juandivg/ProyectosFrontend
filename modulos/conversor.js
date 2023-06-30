import {convertir as distance} from "./distancia.js";
let distancia=document.getElementById("distancia");
let peso=document.getElementById("peso");
let temperatura=document.getElementById("temperatura");
let lista=document.getElementById("lista");
if(lista.value="Distancia"){
    distancia.innerHTML=`<div class="flex justify-center items-center w-full">
    <input id="metros" type="number" class="border border-black mx-[1%]" placeholder="metros"></input>
                    <input id="centimetros" type="number" class="border border-black" placeholder="centimetros"></input></div>`
}
let meters=document.getElementById("metros");
let centimetros=document.getElementById("centimetros");
// meters.value=1;
// centimetros.value=100;
meters.addEventListener("input", () =>{

    let v=distance(meters,true);
    centimetros.value=v;

})
centimetros.addEventListener("input", ()=>{
    let v=distance(centimetros,false);
    meters.value=v


})