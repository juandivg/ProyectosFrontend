import { btn } from "../selectores.js";
import {mostrarMeals} from "../funciones.js"

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        mostrarMeals();
        // btn.addEventListener("submit",(e)=>{
        //     e.preventDefault();
        //     capturarDAtos();
        //     btn.reset();
        // })
        

    }
}
export default App;