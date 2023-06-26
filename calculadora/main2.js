class Calculadora{
    constructor(sum, res, mul, div){
        this.sum=sum
        this.res=res
        this.mul=mul
        this.div=div
    }
}
class Gestionador{
    cosntructor(){
        this.cadena=""
    }
    agregar(parametro){
        this.cadena+=parametro;
        console.log(this.cadena);



    }
    mostrarpan(){
        pantalla.value=this.cadena;
    }
}
const botones=document.querySelectorAll("#boton")
const deletebtn1=document.getElementById('el1')
const deletebtn2=document.getElementById('el2')
const calcular=document.getElementById('calculate')
const pantalla=document.getElementById("pantalla")
const gestioncal=new Gestionador()
botones.addEventListener("click", (event)=>{
    gestioncal.agregar(event.target.textContent)
    console.log(event.target.textContent)})

gestioncal.mostrarpan()