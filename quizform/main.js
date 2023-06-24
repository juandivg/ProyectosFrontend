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
        this.questions.splice(this.questions.splice(index,1));
      }
      getQuestions(){
        return this.questions
      }
    
}
const questionManager=new QuestionManager();



const questForm=document.getElementById("formu");
const quest=document.getElementById("question");
const opcion1=document.querySelector("#op1")
const opcion2=document.querySelector("#op2")
const opcion3=document.querySelector("#op3")
const opcion4=document.querySelector("#op4")
const correcta2=document.querySelector("#correct")
const Questionslist=document.querySelector("#render");
questForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pregunta=quest.value;
    const option1=opcion1.value;
    const option2=opcion2.value;
    const option3=opcion3.value;
    const option4=opcion4.value;
    const correcta=correcta2.value;
    console.log(pregunta)
    const question= new Question(pregunta,option1,option2,option3,option4,correcta)
    questionManager.addQuestion(question)
    questForm.reset();
})
function renderQuestions(){
    const questionblock=document.createElement("div")
    questionblock.innerHTML="";
    const questions=questionManager.getQuestions();
    for(let i=0;i<questions.length;i++){
        const question=questions[i];
        
        questionblock.innerHTML=`
                <p>${question.pregunta}</p>`;
        Questionslist.appendChild(questionblock);
    }



}


