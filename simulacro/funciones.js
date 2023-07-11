import {inp, btn, container} from './selectores.js'
container.innerHTML=""
export async function mostrarMeals(){
    const url="https://www.themealdb.com/api/json/v1/1/categories.php"
    try {
        let response= await fetch(url)
        let dato=await response.json();
        renderMeals(dato);
    } catch (error) {
        console.log(error)
    }
}
function renderMeals(par){
    console.log(par)
    par.categories.forEach(element => {
        container.innerHTML+=`<div class="flex flex-col border border-black rounded-md p-[10px]">
          <div class="flex">
          <p class="pr-[5px]">${element.idCategory}.</p>
          <p>${element.strCategory}</p>
          </div>
          <img src=${element.strCategoryThumb}>                  
          </div>`
    });
} 