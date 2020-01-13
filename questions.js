
let questionIndex = 0
let choicesIndex = 0 
var sec = 75
// let time = 75

// list of all questions, choices, and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//Start Quiz
startBtn.addEventListener("click", startGame);

function startGame() {
    //hide the screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.style.display = "none";
    
    //populate the question and choices
    populateQuestions();
    
    questionsEl.style.display = "block";

    //start timer
    //timer
 
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById("time").innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
        }
        }, 1000);
        }
        document.getElementById('displaytext').addEventListener('click', function() {
        sec -= 15;
        document.getElementById("time").innerHTML='00:'+sec;
    });
    startTimer();
  }
//     function MyTimer(callback, val) {
//         val = val || 75; 
//         var timer=setInterval(function() { 
//             callback(val);
//             if(val-- <= 0) { 
//                 clearInterval(timer); 
//             } 
//         }, 1000);
//     }
//     new MyTimer(function(val) {
//         var timerMsg = (val >= 10 ? val : "0" + val);
//         document.getElementById("time").textContent = timerMsg; 
//     });
// };

function populateQuestions() {
    let choicesDiv = document.querySelector("#choices");
    choicesDiv.innerHTML = "";
    let currentQuestion = questions[questionIndex]
    // console.log("current ?", currentQuestion)
    // console.log(questionIndex)
    
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title

    let choices = currentQuestion.choices
    let choicesLength = currentQuestion.choices.length

    for (var i = 0; i < choicesLength; i++) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.textContent = choices[i];
    // choiceNode.setAttribute("id", `choice${i}`)
    choiceNode.setAttribute("id", "choices"+i) 
    choiceNode.addEventListener("click", userChoice)
    document.getElementsByClassName("choices")[0].appendChild(choiceNode);    
    
    }
    // // add onclick to to each choice 
    // let choice0 = document.getElementById("choice0")
    // let choice1 = document.getElementById("choice1")
    // let choice2 = document.getElementById("choice2")
    // let choice3 = document.getElementById("choice3")

    // choice0.addEventListener("click", userChoice)
    // choice1.addEventListener("click", userChoice)
    // choice2.addEventListener("click", userChoice)
    // choice3.addEventListener("click", userChoice)

    // choiceBtns.addEventListener("click", function(event){
    //     console.log(event)
    //     // userChoice()
    // })
    // fire function that checks if the choice matches answer 
    //if it does great
    //if not then subtract 10 seconds from timer 
}
let score = 0
function userChoice(choice){
    console.log(choice.srcElement.innerText)
    let answer = choice.srcElement.innerText
    let currentQuestion = questions[questionIndex]
    
    if (answer == currentQuestion.answer){
        score++;
        console.log("yup")
    }
    else{
        document.getElementById('choices').addEventListener('click', function() {
            sec -= 15;
            document.getElementById("time").innerHTML='00:'+sec;
            score--;
        // function wrong(){
            // document.getElementById("wrong").innerHTML = "Wrong"
        // }
        });
    }

    //NEW NEW//
    // choices = currentQuestion.choices
   
    //clear answers
    //need to populate the next question...
    // console.log('before', questionIndex)
    // choices++;
    questionIndex++;
    // choicesIndex++;
    // console.log('after', questionIndex)
    populateQuestions()
}

    let end = document.getElementById("end-screen");
        end.style.display = "none"

    //deduct time if answer is wrong
    //hide "All done" "Final score" stuff
    //total points
    //store initials in localStorage
    //
