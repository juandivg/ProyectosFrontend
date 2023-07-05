import { content, btn } from "../selectores.js";
import {obtenerApi} from "../funciones.js"

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        btn.addEventListener("click",()=>{
            obtenerApi();
        })
        

    }
}
export default App;
