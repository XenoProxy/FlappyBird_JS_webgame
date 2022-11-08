var svs = document.getElementById("canvas");
var ctx = cvs.getContext("2d")

// Создание объектов
var bird = new Image();
var bg = new Image(); 
var fg = new Image(); 
var pipeUp = new Image(); 
var pipeBottom = new Image();

// Указание нужных изображений
bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeUp.src = "images/pipeUp.png";
pipeBottom.src = "images/pipeBottom.png"; 

// Звуковые файлы
// Создание аудио объекта
var fly = new Audio(); 
var score_audio = new Audio();

// Указание нужной записи
fly.src = "audio/fly.mp3"; // Указание нужной записи
score_audio.src = "audio/score.mp3";