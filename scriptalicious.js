

$(document).ready(function () {
  var timer;
  var player;
  var timerEl = $("#timer");
  var $heading = $("#heading");
  var $mainDiv = $("#main");
  var name;
  var timeScore = 60; 
  var questionIndex = 0;
  //button, "start", "submit name"
  var $button = $("#button");

  var pg1Heading = "Welcome to the Andrew K Quiz!";
  var pg1Main =
    "No, you don't know anything about him, and this test will prove that. Wrong answers will cost you time, and right answers(or guesses) will provide you with more time, and in the end, GLORY.";

  var quizQuestions = [
    {
      question: "What is Andrew's favorite thing to bake?",
      choices: [
        "Some bomb muffins",
        "He bakes a mean pie",
        "The dude can bake some crazy cupcakes",
        "He's obsessed with artisan bread",
      ],
      answer: ["He's obsessed with artisan bread"],
    },
    {
      question: "What was his daughter's first word?",
      choices: ["mommy", "daddy", "bacon", "an expletive"],
      answer: ["daddy"],
    },
    {
      question: "Where was this jerk born? (city and state)",
      choices: [
        "Albany, NY",
        "Chicago, Illinois",
        "Boise, Idaho",
        "Somewhere in kansas with, like, 4 people.",
      ],
      answer: ["Albany, NY"]
    },
    {
        question: "What was his major in college, right after high school?",
        choices: [
          "Nursing",
          "Achitecture",
          "Being awesome",
          "History"
        ],
        answer: ["Nursing"]
    },
    {
        question: "His favorite guitarist was/is....",
        choices: [
          "Tony Iommi (Black Sabbath",
          "Keith Richards (Rolling Stones)",
          "Jimi Hendrix",
          "Jimmy Page (Led Zeppelin)"
        ],
        answer: ["Jimi Hendrix"]
    },
    {
        question: "If he could leave on a vacation right now, would he pick...",
        choices: [
          "Going to the beach",
          "Camping",
          "A cruise",
          "The library"
        ],
        answer: ["Going to the beach"]
    },
    {
        question: "Favorite Condiment to put on any and all foods?",
        choices: [
          "Salt",
          "A1 Steak Sauce",
          "Barbeque Sauce",
          "Hot Sauce"
        ],
        answer: ["Hot Sauce"]
    }
  ];

  function startTimer() {
    timer =
    setInterval( function() {
      if (timeScore >= 0 && questionIndex < quizQuestions.length){
      timerEl.html(timeScore + " seconds left");
      timeScore--;
      
      } 
      if (questionIndex === quizQuestions.length || timeScore < 0) {
          renderFinal();
           
      }     
  }, 1000);
  }
  function clicked() {
    $("li").on("click", function (event) {

      if (event.target.matches("li")) {
        event.preventDefault();
        var guess = event.target.innerText;
        var answer = JSON.stringify(quizQuestions[questionIndex].answer[0]);
        if (guess === answer) {
          timeScore += 15;
          console.log(timeScore);
        } else {
          timeScore -= 15;
          console.log(timeScore);
        }
        questionIndex++;
        renderQuiz();
      }
    });
  };

  function mainPage() {
    $heading.text(pg1Heading);
    $mainDiv.text(pg1Main);
  }
  function renderQuiz() {

    if (questionIndex === quizQuestions.length) {
      return renderFinal();
    }
    clear();
    $heading.text(quizQuestions[questionIndex].question);
    for (var j = 0; j < quizQuestions[questionIndex].choices.length; j++) {
      var li = document.createElement("li");
      li.innerText = JSON.stringify(quizQuestions[questionIndex].choices[j]);
      $mainDiv.append(li);
    }
    clicked();
  }

  function showScore() {
    $mainDiv.append("<ol>");
    var key;
    var text;
    for (var i = 0; i < localStorage.length; i++) {
      key= i;
      text = JSON.parse(localStorage.getItem(i));
      console.log(text);
      
    }
  }

  function clear(){
    // $mainDiv.text("");
    // $heading.text("");
    $mainDiv.empty();
    $heading.empty();
    
  }
 

 
  
  function renderFinal() {
    clearInterval(timer);
    clear();
    $button.removeClass("hide");
    $button.text("Submit");
    $button.attr("type", "submit");
    name = $("<input/>");
    name.attr("placeholder", "Your name goes here");
    timerEl.text("");  
    $heading.text("FINISHED!");
    $mainDiv.text("Your Time/Score was " + timeScore);
    $mainDiv.append(name);
    

    $button.on("click", function(event) {
      event.preventDefault();
      //you are HeRE
      
      localStorage.setItem(parseInt(timeScore), JSON.stringify(player));
      showScore();

    });
  }
  
    
  
  mainPage();
 
  
  
  $button.on("click", function (event) {
    event.preventDefault();
    $button.addClass("hide");
    startTimer();
    renderQuiz();
  });


});
