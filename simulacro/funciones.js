import {inp1, inp2, btn, btn2, container} from './selectores.js'

export async function mostrarMeals(){
    const url="https://www.themealdb.com/api/json/v1/1/categories.php"
    try {
        let response= await fetch(url)
        let dato=await response.json();
        renderCategories(dato);
    } catch (error) {
        console.log(error)
    }
}
function renderCategories(par){
    console.log(par)
    container.innerHTML=""
    par.categories.forEach(element => {
        container.innerHTML+=`<div class="flex flex-col border border-black rounded-md p-[10px]">
          <div class="flex">
          <p class="pr-[5px]">${element.idCategory}.</p>
          <p>${element.strCategory}</p>
          </div>
          <img src=${element.strCategoryThumb}> 
          <button id="btn2" onclick="check(${element.strCategory})" class="bg-red-400 text-white px-[10px] py-[5px] border rounded-md">Check meals</button>                 
          </div>`
    });
} 
function check(par){
    
}
