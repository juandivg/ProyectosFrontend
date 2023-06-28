class Question{
    constructor(pregunta,option1,option2,option3,option4,correcta){
        this.pregunta=pregunta;
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.correcta=correcta;
    }

}
class QuestionManager{
    constructor(){
        this.questions=[];
    }
    addQuestion(question) {
        this.questions.push(question);
      }
      removeQuestion(index) {
        this.questions.splice(index,1);
      }
      modifyQuestion(index){
        console.log(this.questions.length)
        this.questions.splice(index,1,this.questions[this.questions.length-1]);
        this.questions.pop();

      }
      getQuestions(){
        return this.questions
      }
    
}
  const questionManager=new QuestionManager();
  let c=false;
  let d;
  let puntaje=0;
const questForm=document.getElementById("formu");
const quest=document.getElementById("questionid");
const opcion1=document.querySelector("#op1")
const opcion2=document.querySelector("#op2")
const opcion3=document.querySelector("#op3")
const opcion4=document.querySelector("#op4")
const correcta2=document.querySelector("#correct")
const Questionslist=document.getElementById("render");
const send=document.getElementById('enviar')
const score=document.getElementById('puntaje')
send.addEventListener("click",(e)=>{
  const questions=questionManager.getQuestions()
  determinar();
  score.classList.remove("hidden")
  score.classList.add("flex")
  const scoretitle=document.createElement("h1")
  const renderscore=document.createElement("div")
  scoretitle.innerText="Su puntaje es:"
  console.log(puntaje);
  renderscore.innerHTML=`${puntaje}/${questions.length}`
  score.append(scoretitle,renderscore)
  
})
questForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pregunta=quest.value;
    const option1=opcion1.value;
    const option2=opcion2.value;
    const option3=opcion3.value;
    const option4=opcion4.value;
    const correcta=correcta2.value;
    const questionobj= new Question(pregunta, option1, option2, option3, option4, correcta)
    questionManager.addQuestion(questionobj)
    if(c){
      questionManager.modifyQuestion(d)
      c=false;
    }
    
    renderQuestions();
    
    questForm.reset();
})
function renderQuestions(){
    Questionslist.innerHTML="";
    const questions=questionManager.getQuestions();
    console.log(questions)
    for(let i=0;i<questions.length;i++){
      const questionblock=document.createElement("li")
      questionblock.classList.add("flex","flex-col","py-[1%]","border","rounded-xl","w-[90%]","bg-blue-200", "text-[20px]","px-[5%]","my-[2%]")
        const questionobj=questions[i];
        console.log(questionobj)
        questionblock.innerHTML=`
      <fieldset>
      <legend class="font-bold">${i+1}. ${questionobj.pregunta}</legend>

      <div>
        <input class=" mr-[1%]" type="radio" name="q${i}" value="${questionobj.option1}"
               >${questionobj.option1}
      </div>
      <div>
      <input class=" mr-[1%]" type="radio" name="q${i}" value="${questionobj.option2}"
      >${questionobj.option2}
    </div>
    <div>
    <input class=" mr-[1%]" type="radio" name="q${i}" value="${questionobj.option3}"
    >${questionobj.option3}
  </div>
  <div>
  <input class=" mr-[1%]" type="radio" name="q${i}" value="${questionobj.option4}"
  >${questionobj.option4}
</div>
  </fieldset>
<div class="flex justify-center items-center w-full">
<button class="border p-[10px] mr-[10%] bg-red-400 rounded-xl justify-center itmes-center" onclick="removeQuestion(${i})">Eliminar</button>
<button class="border p-[10px] bg-blue-600 rounded-xl justify-center itmes-center" onclick="Modificar(${i})">Modificar</button>
</div>
    `;

        Questionslist.appendChild(questionblock);
    }
}
// const deter=document.getElementsByName('q0')
// console.log(deter[0])
 function determinar(){
   const questions=questionManager.getQuestions();
   let selectedOption=[]
   let iteraciones=0;
   for(let i=0;i<questions.length;i++){
     selectedOption=document.getElementsByName("q"+(i))
     console.log(selectedOption)
     for(var sel of selectedOption){
      iteraciones++;
        if(sel.checked){
          if(questions[i].correcta==iteraciones){
            puntaje++;
          }
        }
     }
     console.log(puntaje)
     selectedOption=[]
     iteraciones=0;
   }
 }



function removeQuestion(index){
  questionManager.removeQuestion(index);
  renderQuestions();
}
function Modificar(index){
  Questionslist.innerHTML="";
    c=true;
    d=index;

}

