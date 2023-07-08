import { btn } from "../selectores.js";
import {capturarDAtos} from "../funciones.js"

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        btn.addEventListener("submit",(e)=>{
            e.preventDefault();
            capturarDAtos();
            btn.reset();
        })
        

    }
}
export default App;