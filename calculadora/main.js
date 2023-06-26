
let pantalla=document.querySelector('#pantalla').children[0]
let numero=""

function eliminar2(){
    numero=""
    pantalla.value=numero;
}
function eliminar1(){
   let num = numero.split('')
   num.pop()
   num=num.join('')
   numero=num
  pantalla.value=numero

}

function agregar(){
    
    numero+=event.target.textContent
    console.log(event)
    pantalla.value=numero;
}
function calcular(){
let num = numero.split(/[+\-x\/]/);

let arr=numero.split('');
console.log(arr)
 let signos=[];
 let j=0;
 for(let i=0;i<arr.length;i++){
    if(arr[i]=='+'||arr[i]=='-'||arr[i]=='x'||arr[i]=='/'){
        signos[j]=arr[i];
        j++;

    }
 }   
 num[0]=parseFloat(num[0])

 if(arr[0]=='-'){
    signos.shift()
    num.shift()
    num[0]=parseFloat(-1*num[0])

 }
 const k=signos.length
 let copia=signos.slice();
 let c=0
 for(let i=0;i<k;i++){
    if(copia[i]=='x'){
            num[i-c]*=parseFloat(num[i+1-c])
            num.splice(i+1-c,1)
            signos.splice(i-c,1)
            c++;   
    }
    else if(copia[i]=='/'){
        num[i-c]/=parseFloat(num[i+1-c])
        num.splice(i+1-c,1)
        signos.splice(i-c,1)
        c++;
    }
 }
 const k2=num.length;

    for(let i=1;i<k2;i++){

    if(signos[i-1]=='+'){
        num[0]+=parseFloat(num[1]);
        num.splice(1,1)
    }
    else if(signos[i-1]=='-'){
        num[0]-=parseFloat(num[1]);
        num.splice(1,1)

    }
    }
    
//vamos a crear un nuevo array  que contenga los caracteres
    pantalla.value=num[0];
}
