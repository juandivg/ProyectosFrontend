let guardar = JSON.parse(localStorage.getItem("form"));
let content = document.querySelector("#cont");



function pintar(ar){
  content.innerHTML="";
  for (let i = 0; i < ar.length; i++) {
    let tr = document.createElement("tr");
  
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    td1.classList.add("px-16")
    td2.classList.add("px-16")
    td3.classList.add("px-16")
    td4.classList.add("px-16")
    td5.classList.add("px-16")
    td1.textContent = ar[i].area;
    td2.textContent = ar[i].name;
    td3.textContent = ar[i].user;
    td4.textContent = ar[i].email;
    td5.textContent = ar[i].age;
    content.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  
  
  
  
  }
  
}
pintar(guardar);
let z=0;
var nombre=[]
var area2=[]
var edad=[]
let filtrado=[];
function buscar(event){
  filtrado=[];
  let inp=document.getElementById('inpu');
  let valor=event.target.value;
  console.log(event)
  let dato
  let j=0;
  for(let i=0;i<guardar.length;i++){
    dato=guardar[i].name;
    if(dato.includes(valor)){
      filtrado[j]=guardar[i];
      
      j++;

    }
  }
  console.log(inp.value)
  if(inp.value!=""){
    pintar(filtrado)
    asignar(filtrado)
    console.log(filtrado);
    console.log(nombre)
  }
  else{
    pintar(guardar)
    asignar(guardar)
    
  }

  
  
}

let c=0;
function asignar(array){
  nombre=array.map(objeto => objeto.name);
 area2=array.map(objeto => objeto.area);
 edad=array.map(objeto => objeto.age);

}
asignar(guardar);

 

function ordenar(arr){
   let k2=filtrado.length;
   let k=guardar.length;
  if(c==1){
    if(arr.length<guardar.length){
      pintar(filtrado);
    }
    else{
      pintar(guardar);
    }
    
    c=0
  }
  else{
    
    let arr2=arr.slice();
    arr2.sort();
    if(arr.length<guardar.length){
      for(let i=0;i<arr2.length;i++){
        for(let j=0;j<k2;j++){
          if(arr2[i]==arr[j]){
            arr2[i]=filtrado[j];
          }
        }
    }
    }
else{
  for(let i=0;i<arr2.length;i++){
    for(let j=0;j<k;j++){
      if(arr2[i]==arr[j]){
        arr2[i]=guardar[j];
      }
    }
  
  }
}

pintar(arr2);
  c=1;
  }


}


