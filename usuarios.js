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
    let td6=document.createElement("td");
    let btn=document.createElement("button");
    let img=document.createElement("img");
    td1.innerText = ar[i].area;
    td2.innerText = ar[i].name;
    td3.innerText = ar[i].user;
    td4.innerText = ar[i].email;
    td5.innerText = ar[i].age;
    td6.appendChild(btn)
    btn.appendChild(img)
    img.setAttribute('src','./xroja.jpg')
    img.classList.add("w-[20px]","h-[20px]")
    td1.classList.add("text-center")
    td2.classList.add("text-center")
    td3.classList.add("text-center")
    td4.classList.add("text-center")
    td5.classList.add("text-center")
    td6.classList.add("text-center")
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6)
    content.appendChild(tr);
  
  
  
  
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


