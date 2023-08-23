// welcome the user
alert("Welcome to Quiz Ninja!");

// var quiz = [
//     ["1 + 1", "2"],
//     ["2 + 2", "4"],
//     ["4 + 4", "8"],
//     ["8 + 8", "16"],
//     ["16 + 16", "32"],
//     ["32 + 32", "64"],
//     ["64 + 64", "128"],
//     ["128 + 128", "256"],
//     ["256 + 256", "512"],
//     ["512 + 512", "1024"],
//      ];
// var score = 0

// for(var i=0, max=quiz.length; i<max; i++){
//     var answer = prompt(quiz[i][0]);
//     if( answer === quiz[i][1]){
//         alert("Correct!");
//         score++;
//     }else{
//         alert("wrong!");
//     }
// }

// quiz = {
//   "name":"Super Hero Name Quiz",
//   "description":"How many super heroes can you name?",
//   "question":"What is the real name of ",
//   "questions": [
//   { "question": "Superman", "answer": "Clarke Kent" },
//   { "question": "Batman", "answer": "Bruce Wayne" },
//   { "question": "Wonder Woman", "answer": "Dianna Prince" }
//   ]
//   }

var quiz = [
  ["What is Superman's real name?","Clarke Kent"],
  ["What is Wonderwoman's real name?","Dianna Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
  ];
  var score = 0 // initialize score
  play(quiz);

  function play(quiz){
    // main game loop
    for(var i=0, question, answer, max=quiz.length; i<max; i++) {
    question = quiz[i][0];
    answer = ask(question);
    check(answer, i);
    }
    // end of main game loop
    gameOver();
    }

    

    function ask(question) {
      return prompt(question); // quiz[i][0] is the ith questions
      }

      function check(answer, i) {
        if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
        alert("Correct!");
        // increase score by 1
        score++;
        } else {
        alert("Wrong!");
        }
        }
        
        function gameOver(){
          // inform the player that the game has finished and tell them how many points they have scored
          alert("Game Over, you scored " + score + "points");
          }
          
      
    function update(Element, content, klass) {
      var p = element.firstchild || document.createElement("p");
      p.textContent = content;
      element.appendChild(p);
      if(klass) {
        p.className = klass
      }
    }

    var $score = document.getElementById("score");
var $question = document.getElementById("question");
var $feedback = document.getElementById("feedback");


  

