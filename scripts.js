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
  ["What is Superman's real name?", "Clarke Kent"],
  ["What is Wonderwoman's real name?", "Dianna Prince"],
  ["What is Batman's real name?", "Bruce Wayne"]
];
var score = 0; // initialize score

// References to HTML elements
var $score = document.getElementById("score");
var $question = document.getElementById("question");
var $feedback = document.getElementById("feedback");

// Start the quiz
play(quiz);

function play(quiz) {
  // Main game loop
  update($score, score);
  for (var i = 0, question, answer, max = quiz.length; i < max; i++) {
    question = quiz[i][0];
    answer = ask(question);
    check(answer, i); // Pass the current index to the check function
  }
  // End of main game loop
  gameOver();
}

function update(element, content, klass) {
  var p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if (klass) {
    p.className = klass;
  }
}

function ask(question) {
  update($question, question);
  return prompt(question); // Return the user's input (answer)
}

function check(answer, i) {
  if (answer === quiz[i][1]) { // Access the answer at index 1
    update($feedback, "Correct!", "right");
    score++; // Increase the score by 1
    update($score, score);
  } else {
    update($feedback, "Incorrect!", "wrong");
  }
}

function gameOver() {
  // Inform the player that the game has finished and tell them how many points they have scored
  update($question, "Game Over, you scored " + score + " points");
}
          
      
    

    


  

