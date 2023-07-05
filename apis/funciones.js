import { content } from "./selectores.js";

 export async function obtenerApi(){
    const url="https://jsonplaceholder.typicode.com/comments"
    try{
        const response=await fetch(url)
        const result= await response.json(); 
        mostrarComment(result)
    }
    catch(error){
        console.log(error)
    }
}
function mostrarComment(par){
    let comment=''
    par.forEach((cosa, index) => {
        const {name, email, body}=cosa
 
        comment+=` 
        <div>
            <p>${name}</p> 
            <p>${email}</p> 
            <p>${body}</p> 
        </div>`
        content.innerHTML= `${comment}`;
    });
}