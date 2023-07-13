var startBtn = document.getElementById("startBtn");
var time = 60;
var time_remaining = true;
var time_start= false;
var countdownTimer = document.getElementById("countdownTimer");
var homeContainer =  document.getElementById("homeContainer");
var quizContainer = document.getElementById("quizContainer");
var questionHeading = document.getElementById("questionHeading");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correctAnswer");    
var high_scores= [];
var output="";
var score = 0;
let i = 0;
var questionsArray = [
{   question: "What is HTML used for?",
    imageSrc: "",
    answerChoice: ["A) To interact with the page", "B) To give the page spice", "D) To provide structure and content to a webpage", "D) None of the above"],
    correctAnswer: 2
},
{
    question: "What is CSS used for?",
    imageSrc: "",
    answerChoice: ["A) To style and layout a webpage", "B) To only provide color to the font on a webpage", "C) To connect to the Wifi", "D) We do not use CSS"],
    correctAnswer: 0
}, 
{
    question: "What does JavaScript allow us to do with a webpage?",
    imageSrc: "",
    answerChoice: ["A) Order Coffee", "B) Write a script for a play called Java", "C) Allows us to interact with the page", "D) None of the above"],
    correctAnswer: 2
},
{
    question: "What is API short for?",
    answerChoice: ["A) Application Programming Interface", "B) Associated Press International ", "C) Aragonese Perfumery Institute ", "D) Applied Probability Information "],
    correctAnswer: 0
},
{
    question: "What is the DOM Interface?",
    imageSrc: "",
    answerChoice: ["A) a guy named Dominic", "B) Document Object Model", "C) Programming interface for web documents", "D) Both B and C are correct"],
    correctAnswer: 3
},
{
    question: "What is the console in a we browser show the developer?",
    imageSrc: "",
    answerChoice: ["A) A tv console table made from logs of wood ", "B) a tool which logs the information associated with a web application", "C) A log of wood from a console tree ", "D) A list of developer names"],
    correctAnswer: 1
}];
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    };
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});
function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };
answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
        if (0 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            score++;    
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });
answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });
answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });
answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});
        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            };
        function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            };
        function view_high_scores(){
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        };
        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        };
        function clear_hs(){
            high_scores = [];
          };
        function clear_up(){
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        };