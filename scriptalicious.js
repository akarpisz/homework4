$(document).ready(function () {
  var $heading = $("#heading");
  var $mainDiv = $("#main");
  var timeScore = 60;
  var questionIndex = 0;
  //button, "start", "submit name"
  var $button = $("#button");

  var pg1Heading = "Welcome to the Andrew K Quiz!";
  var pg1Main =
    "No, you don't know anything about him, and this test will prove that. Wrong answers will cost you time, and right answers(or guesses) will provide you with more time, and in the end, GLORY.";

  var quizQuestions = [
    {
      question: "what is Andrew's favorite thing to bake?",
      choices: [
        "some bomb muffins",
        "he bakes a mean pie",
        "the dude can bake some crazy cupcakes",
        "he's obsessed with artisan bread",
      ],
      answer: ["he's obsessed with artisan bread"],
    },
    {
      question: "what was his daughter's first word?",
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
      answer: ["Albany, NY"],
    },
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
  function clicked() {
    $("li").on("click", function (event) {
      console.log("li clicked");

      if (event.target.matches("li")) {
        event.preventDefault();
        var guess = event.target.innerText;
        var answer = JSON.stringify(quizQuestions[questionIndex].answer[0]);
        if (guess === answer) {
          timeScore += 10;
          console.log(timeScore + "it works");
        } else {
          timeScore -= 10;
          console.log(timeScore + "wrong");
        }
        questionIndex++;
        renderQuiz();
      }
    });
  }

  function mainPage() {
    $heading.text(pg1Heading);
    $mainDiv.text(pg1Main);
  }
  function renderQuiz() {
    if (questionIndex === quizQuestions.length) {
      return renderFinal();
    }

    console.log(questionIndex);
    $heading.text("");
    $mainDiv.text("");
    $heading.text(quizQuestions[questionIndex].question);
    for (var j = 0; j < quizQuestions[questionIndex].choices.length; j++) {
      var li = document.createElement("li");
      li.innerText = JSON.stringify(quizQuestions[questionIndex].choices[j]);
      $mainDiv.append(li);
    }
    clicked();
  }

  function timer() {
    timeScore--;
  }

  function renderFinal() {
    console.log("finished!");
  }
  mainPage();
  $button.on("click", function (event) {
    renderQuiz();
  });
});
