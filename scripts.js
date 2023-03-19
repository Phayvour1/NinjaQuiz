// welcome the user
alert("Welcome to Quiz Ninja!");

var quiz = [
    ["1 + 1", "2"],
    ["2 + 2", "4"],
    ["4 + 4", "8"],
    ["8 + 8", "16"],
    ["16 + 16", "32"],
    ["32 + 32", "64"],
    ["64 + 64", "128"],
    ["128 + 128", "256"],
    ["256 + 256", "512"],
    ["512 + 512", "1024"],
     ];
var score = 0

for(var i=0, max=quiz.length; i<max; i++){
    var answer = prompt(quiz[i][0]);
    if( answer === quiz[i][1]){
        alert("Correct!");
        score++;
    }else{
        alert("wrong!");
    }
}

alert("GAME OVER , YOU SCORED" +" " + score + " " +"points");