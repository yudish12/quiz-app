const Quiz=[
    {question:"which is best coding language?",
     option_a:"python",
     option_b:"javaScript",
     option_c:"java",
     option_d:"c++",
     correctOption:"b"
},
{
    question:"when javaScript was made?",
     option_a:"1992",
     option_b:"1991",
     option_c:"1986",
     option_d:"2002",
     correctOption:"b"
},
{
    question:"who is president of india?",
     option_a:"me",
     option_b:"you",
     option_c:"none of these",
     option_d:"all of these",
     correctOption:"c"
}
];
let score = 0;
const Question=document.getElementById("ques");
const aOpt = document.getElementById("a_text");
const bOpt = document.getElementById("b_text");
const cOpt = document.getElementById("c_text");
const dOpt = document.getElementById("d_text");
let currentQuiz=0;
loadQuiz();
function loadQuiz(){
let currentQuestion=Quiz[currentQuiz];
Question.innerHTML=currentQuestion.question;
aOpt.innerHTML=currentQuestion.option_a;
dOpt.innerHTML=currentQuestion.option_d;
cOpt.innerHTML=currentQuestion.option_c;
bOpt.innerHTML=currentQuestion.option_b;
}
const x = document.querySelector("button");
x.addEventListener("click",function(){
    currentQuiz++;
    if(currentQuiz<Quiz.length){
    checkans();
    loadQuiz();
    deselect();
}
else{
    checkans();
    alert(`quiz is completed your score is ${score}`);
    
}
});
const y = document.getElementsByName("ans");
function deselect(){
y.forEach((answerel)=>{
if(answerel.checked){
    answerel.checked=false;
}
});
}
let userAns;
function checkans(){
    y.forEach((ansel)=>{
        if(ansel.checked){
            userAns=ansel.id;
        }
    });
    if(userAns===Quiz[currentQuiz-1].correctOption){
        score++;
    }
    console.log(score);
}