var $heading = $('#heading');
var $mainDiv = $('#main');
var timeLeft = 60;

var $button = $('#button');
        
var pg1Heading = "Welcome to the Andrew K Quiz!";
var pg1Main = "No, you don't know anything about him, and this test will prove that. Wrong answers will cost you time, and right answers(or guesses) will provide you with more time, and in the end, GLORY.";
var indexQ = 0;
var quizQuestions = [
    {
    question: "what is Andrew's favorite thing to bake?",
    choices: [
    "some bomb muffins",
    "he bakes a mean pie",
    "the dude can bake some crazy cupcakes",
    "he's obsessed with artisan bread"
    ],
    answer: ["he's obsessed with artisan bread"]
    },
    {
    question: "what was his daughter's first word?",
    choices: [
    "mommy",
    "daddy",
    "bacon",
    "an expletive"
    ],
    answer: ["daddy"]
    },
    {
    question: "Where was this jerk born? (city and state)",
    choices: [
    "Albany, NY",
    "Chicago, Illinois",
    "Boise, Idaho",
    "Somewhere in kansas with, like, 4 people."
    ],
    answer: ["Albany, NY"]
    }
            // {
            //     question: "What did he enroll in college for right after high school?",
            //     choices: [
        
            //     ],
            //     answer: 0
            // },
            // {
            //     question: "",
            //     choices: [
        
            //     ],
            //     answer: 0
            // },
            // {
            //     question: "",
            //     choices: [
        
            //     ],
            //     answer: 0
            // },
            // {
            //     question: "",
            //     choices: [
        
            //     ],
            //     answer: 0
            // }
            
]; 
function mainPage() {
    $heading.text(pg1Heading);
    $mainDiv.text(pg1Main);
};

function renderQuiz(i) {
    $heading.text("");
    $mainDiv.text("");
    $heading.text(quizQuestions[i].question);
    for (var j = 0; j < quizQuestions[i].choices.length; j++) {
            //console.log(quizQuestions[0].choices.length);
        var li = document.createElement("li");
        li.innerText = JSON.stringify(quizQuestions[i].choices[j]);
        $mainDiv.append(li); };

        $('li').on("click", function() {
            if (event.target.matches('li')) {
                event.preventDefault(); 
                var guess = event.target.innerText;
                var answer = (JSON.stringify(quizQuestions[i].answer[0]));
                if (guess === answer) {
                    timeLeft += 10;
                    console.log(timeLeft + " it works");
                    return;
                } else {
                    timeLeft -= 10;
                    console.log(timeLeft)
                    return;
                };
                
                }
        });
};


$(document).ready( function() {