import { btn } from "../selectores.js";
import {capturarDAtos} from "../funciones.js"

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        btn.addEventListener("click",()=>{
            capturarDAtos();
        })
        

    }
}
export default App;