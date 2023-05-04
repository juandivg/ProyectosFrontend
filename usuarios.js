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

function buscar(){
  let valor=event.target.value;
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
  pintar(filtrado);
}
let c=0;
function ordenar(){
   
  if(c==1){
    pintar(guardar);
    c=0
  }
  else{
    let arrfilas=[];
for(let i=0;i<guardar.length;i++){
  arrfilas[i]=guardar[i].name;

}
arrfilas.sort();
for(let i=0;i<arrfilas.length;i++){
  
  for(let j=0;j<arrfilas.length;j++){
    if(arrfilas[i]==guardar[j].name){
      arrfilas[i]=guardar[j];
    }
  }

}
pintar(arrfilas);
  console.log(arrfilas);
  c=1;
  }


}


