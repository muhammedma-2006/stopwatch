const display = document.getElementById("timer");
let startTime = 0;
let timer = null;
let elapsedTime = 0;
let isRunning = false;

function startTimer(){
    if(!isRunning){

        startTime = Date.now() - elapsedTime;
        timer = setInterval(updatetimer , 10);
        isRunning =true;
    }
}

function stop(){
    if(isRunning){

    clearInterval(timer);
    isRunning = false;
    }
}
function reset(){
    clearInterval(timer);

    startTime = 0;
     elapsedTime = 0;
     isRunning = false;

     display.textContent = "00:00:00:00";

}
function updatetimer(){
    const currentTime = Date.now() ;

    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime /( 1000 * 60)) % 60 );
    let second = Math.floor((elapsedTime/1000) % 60);
    let milisecond = Math.floor(elapsedTime % 1000 / 10);


    hours = String(hours).padStart(2 ,"0");
    minutes = String(minutes).padStart(2 ,"0");
    second = String(second).padStart(2 ,"0");
    milisecond = String(milisecond ).padStart(2 ,"0");

    display.textContent = `${hours}:${minutes}:${second}:${milisecond}`;
}