var questions = ["what does html stand for?","what does html stand for?","what does html stand for?"];
var answers = [['hyper text markup language','home tools markup language','hyperlinks and text markup language'],['home tools markup language','hyper text markup language','hyperlinks and text markup language'],['home tools markup language','hyperlinks and text markup language','hyper text markup language']];
var correct = [0,1,2];
var questionNumber = 0;
var score = 0;
const startButton = document.querySelector('#start');
const title = document.querySelector('.title2');


startButton.addEventListener('click',start);

function start(){
    questionNumber = 0;
    const quiz = startButton.parentNode;
    quiz.className = 'QA';
    quiz.innerHTML = ''
    var question = document.createElement('h2');
    question.innerText = questions[questionNumber];
    question.className = 'question'
    var a1 = document.createElement('h4');
    var a2 = document.createElement('h4');
    var a3 = document.createElement('h4');
    a1.className = 'answer';
    a1.id = 'answer1'
    a2.className = 'answer';
    a2.id = 'answer2'
    a3.className = 'answer';
    a3.id = 'answer3'
    a1.innerText = answers[questionNumber][0];
    a2.innerText = answers[questionNumber][1];
    a3.innerText = answers[questionNumber][2];
    quiz.appendChild(question);
    quiz.appendChild(a1);
    quiz.appendChild(a2);
    quiz.appendChild(a3);
    var footer = document.createElement('footer');
    let next = document.createElement('span');
    let index = document.createElement('span');
    index.className
    index.innerText = questionNumber+1 + '  of  ' + questions.length + ' questions';
    quiz.style.borderRadius = '0';
    next.classList.add('button','next') ;
    next.innerText = 'Next';
    footer.appendChild(index);
    footer.appendChild(next);
    quiz.parentNode.appendChild(footer);
    
    const x = document.querySelectorAll('.answer');
    const answer1 =document.querySelector('#answer1');
    const answer2 =document.querySelector('#answer2');
    const answer3 =document.querySelector('#answer3');

    answer1.addEventListener('click', function(){
    
        for (i=0;i<x.length;i++){
            if(x[i].classList.contains('checked')){
                x[i].classList.toggle('checked');
            }
        }  
        answer1.classList.toggle('checked');
    }); 


answer2.addEventListener('click',function() {
    for (i=0;i<x.length;i++){
        if(x[i].classList.contains('checked')){
            x[i].classList.toggle('checked');
        }
    }  
    answer2.classList.toggle('checked');
} ) ;  


answer3.addEventListener('click', function(){

    for (i=0;i<x.length;i++){
        if(x[i].classList.contains('checked')){
            x[i].classList.toggle('checked');
        }
    }  
    answer3.classList.toggle('checked');
})   

    const nextButton = document.querySelector('.next');
    nextButton.addEventListener('click',() => {
        let a = 0
        let checkedButton = document.querySelector('.checked');
        if(checkedButton == null)
        {
            alert('choose an answer');
        }
        else{
        while((a<x.length)&&(checkedButton.isSameNode(x[a]) == false)){
            a = a+1;
        }
        if(a==correct[questionNumber])
        {
            score = score+1;
        }
        questionNumber = questionNumber+1;
        if(questionNumber<questions.length)
        {
        for(a = 0;a<x.length;a++){
            if(x[a].classList.contains("checked")){
                x[a].classList.toggle("checked");
            }
        }
        question.innerText = questions[questionNumber];
        a1.innerText = answers[questionNumber][0];
        a2.innerText = answers[questionNumber][1];
        a3.innerText = answers[questionNumber][2];
        index.innerText = questionNumber+1 + ' of  ' + questions.length + '  questions';
        }
        else{
            quiz.innerHTML='';
            quiz.parentNode.removeChild(footer);
            quiz.className = 'quiz';
            quiz.borderRadius = '10px';
            let img = document.createElement('img');
            let congrats = document.createElement('h2');
            let scoreDisplay = document.createElement('h2');
            var restart = document.createElement('span');
            restart.className = 'button';
            restart.innerText = 'restart';
            img.src = 'images/crown.png';
            img.className = 'crown';
            congrats.innerText = 'you have completed the Quiz';
            scoreDisplay.innerText = 'you got ' + score + ' of ' + questions.length;
            congrats.className = 'congrats';
            scoreDisplay.className = 'congrats';
            quiz.appendChild(img);
            quiz.appendChild(congrats);
            quiz.appendChild(scoreDisplay);
            quiz.appendChild(restart);
            restart.addEventListener('click',() =>{
                //quiz.innerHTML = '';
                //let startButton = document.createElement('span');
                //let startText = document.createElement('h1');
                //startButton.innerText = 'start';
                //startText.textContent = 'Ready to start?';
                //startButton.className = 'button';
                //startButton.id = 'start';
                //startText.className = 'title2';
                //quiz.appendChild(startText);
                //quiz.appendChild(startButton);
                document.location.reload();
            })
        }}
    })

}
    

    
    
    
