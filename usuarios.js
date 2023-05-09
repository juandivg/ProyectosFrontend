let guardar = JSON.parse(localStorage.getItem("form"));
let content = document.querySelector("#cont");



function pintar(arr){
  content.innerHTML="";
  for (let i = 0; i < arr.length; i++) {
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
    td1.textContent = arr[i].area;
    td2.textContent = arr[i].name;
    td3.textContent = arr[i].user;
    td4.textContent = arr[i].email;
    td5.textContent = arr[i].age;
    content.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
  
  
  
  
  }
}
pintar(guardar);

function buscar(event){
  let valor=event.target.value;
  let inp=document.getElementById('inpu');
  console.log(event)
  let dato
  let filtrado=[];
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
  }
  else{
    pintar(guardar)
  }
  
}
let c=0;
const nombre=guardar.map(objeto => objeto.name);
const area2=guardar.map(objeto => objeto.area);
const edad=guardar.map(objeto => objeto.age);
function ordenar(arr){
   
  if(c==1){
    pintar(guardar);
    c=0
  }
  else{
    
    let arr2=arr.slice();
    arr2.sort();
for(let i=0;i<arr.length;i++){
  
  for(let j=0;j<arr.length;j++){
    if(arr2[i]==arr[j]){
      arr2[i]=guardar[j];
    }
  }

}
pintar(arr2);
  c=1;
  }


}


